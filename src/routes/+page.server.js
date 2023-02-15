// @ts-nocheck
import {MAIL_PASS} from '$env/static/private'
import nodemailer from 'nodemailer';
import { error, redirect } from "@sveltejs/kit"




 let mailInfo = {
  mail: '',
  nombre: '', 
  empresa: '',
  duda: ''    
  }


export const load = () => {
  return {
    mailInfo,
    
  }
}

//Configruacion email



const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.es',
  port: 587,
  secure: true,
  auth: {
      user: 'info@seo-agency.es',
      pass: MAIL_PASS
  }
});



//Cuerpo email
const options = {
  from: 'info@seo-agency.es',
  to: 'pablobalon@hotmail.com',
  subject: 'SEO AGENCY LEAD',
  html: `
  <h2>${mailInfo.empresa}</h3>
  <p>Correo:${mailInfo.mail}</p>
  <p>Interesado:${mailInfo.nombre}</p>
  <p>Dura:${mailInfo.duda}</p>`
}

//Obtenemos valores del formulario y validamos errores

export const actions = {

default: async ( {request}) => {
    const data = await request.formData();
    const email = data.get('email');
    const nombre = data.get('nombre');
    const empresa = data.get('empresa');
    const duda = data.get('duda');

    if (nombre.length < 1 || email.length < 1 || empresa.length < 1 || duda.length < 1) {
      throw error(404, {
        message: 'Rellena todo el formulario'
      });

    } 
      //Si OK rellenamos variables con los datos del mail y enviamos mail


      const info = {
        nombre: nombre,
        mail: email,
        empresa: empresa,
        duda: duda
      }

      Object.assign(mailInfo, info)
      transporter.sendMail(options, (err, info) => {
        console.log(info.envelope);
        console.log(err);
        console.log(info.messageId);
    });
      return { success: true}   
  }
}





  


