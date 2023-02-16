// @ts-nocheck
import {MAIL_PASS} from '$env/static/private'
import nodemailer from 'nodemailer';
import { error, redirect } from "@sveltejs/kit"


let pass = process.env.MAIL_PASS

 let mailInfo = {
  mail: '',
  nombre: '', 
  empresa: '',
  duda: ''    
  }


export const load = () => {
  return {
    mailInfo,
    pass
  }
}

//Configruacion email



const transporter = nodemailer.createTransport({
  host: 'smtp.ionos.es',
  port: 587,
  secure: true,
  auth: {
      user: 'info@seo-agency.es',
      pass: process.env.MAIL_PASS
  }
});



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


      const mailData = {
        nombre: nombre,
        mail: email,
        empresa: empresa,
        duda: duda
      }

      const options = {
        from: 'info@seo-agency.es',
        to: 'pablobalon@hotmail.com',
        subject: 'SEO AGENCY LEAD',
        html: `
        <h2>${mailData.empresa}</h3>
        <p>Correo:${mailData.mail}</p>
        <p>Interesado:${mailData.nombre}</p>
        <p>Dura:${mailData.duda}</p>`
      }

      Object.assign(mailInfo, mailData)
      await transporter.sendMail(options, (err, info) => {
        if (error) {
          return console.log(err.message);
       }
       console.log('Message sent: %s', info.messageId);
    });
      return { success: true}   
  }
}





  


