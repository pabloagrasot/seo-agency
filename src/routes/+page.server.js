// @ts-nocheck
import { error, redirect } from "@sveltejs/kit"
import	sgMail from '@sendgrid/mail'


let pass = process.env.MAIL_PASS
let api = process.env.API_SENDGRID

 let mailInfo = {
  
  }


export const load = () => {
  return {
    mailInfo,
    pass,
    api
  }
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


      const mailData = {
        nombre: nombre,
        mail: email,
        empresa: empresa,
        duda: duda
      }


      Object.assign(mailInfo, mailData)

        

      return { success: true}   
  },

sendMail:  async (event) => {

// sgMail.setApiKey(process.env.API_SENDGRID)
//
// const sendMail = async (msg) => {
//   try {
//     await sgMail.send(msg)
//     console.log('mensaje enviado')
//   }
//   catch (error){
//     console.log(error)
//     if(error.response){
//       console.error(error.response.body)
//     }
//   }
// }
// 
// sendMail({
//   to:'info@seo-agency.es',
//   from: 'seo-agency.es',
//   subject: 'SEO AGENCY LEAD',
//   html: `
//   <h2>${mailInfo.empresa}</h3>
//   <p>Correo:${mailInfo.mail}</p>
//   <p>Interesado:${mailInfo.nombre}</p>
//   <p>Dura:${mailData.duda}</p>`
//
// })
return {todo: ok}
}

}





  


