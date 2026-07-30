(()=>{var e={};e.id=746,e.ids=[746],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6836:(e,t,o)=>{"use strict";o.r(t),o.d(t,{patchFetch:()=>v,routeModule:()=>u,serverHooks:()=>f,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>g});var r={};o.r(r),o.d(r,{POST:()=>c});var n=o(2706),a=o(8203),s=o(5994),l=o(9187),i=o(8220);let d=process.env.TEAM_EMAIL,p=process.env.FROM_EMAIL;async function c(e){if(!process.env.RESEND_API_KEY)return l.NextResponse.json({success:!1,error:"Resend API key not configured"},{status:500});let t=new i.u(process.env.RESEND_API_KEY);try{let{name:o,email:r,phone:n,service:a,requested_modules:s,preferred_date:i,message:c,company:u,totalScore:x,recommendationTitle:g}=await e.json();if(!o||!r)return l.NextResponse.json({success:!1,error:"Name and email are required"},{status:400});let f="";for(let e of[{label:"Name",value:o},{label:"Email",value:r},{label:"Phone",value:n||"N/A"},{label:"Company",value:u||"N/A"},{label:"Service Type",value:a||"General Inquiry"},{label:"Requested Modules",value:s||"N/A"},{label:"Preferred Date",value:i||"N/A"},{label:"Assessment Score",value:null!=x?`${x}/100`:null},{label:"Readiness Level",value:g||null}])e.value&&"N/A"!==e.value&&(f+=`<tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: 600; color: #0b3937; width: 180px;">${e.label}</td>
          <td style="padding: 10px; border: 1px solid #ddd; color: #333;">${e.value}</td>
        </tr>`);let v=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact - Axonova Consulting</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background-color: #0b3937; color: #ffffff; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Request</h1>
            <p style="margin: 10px 0 0; color: #a9fa60; font-weight: 600;">Axonova Consulting</p>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333;">A new contact request has been submitted:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              ${f}
            </table>
            ${c?`
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f4ff; border-left: 4px solid #0b3937; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #0b3937;">Message:</p>
              <p style="margin: 8px 0 0; color: #555;">${c}</p>
            </div>`:""}
            <p style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
              Sent from axonovaconsulting.co.uk
            </p>
          </div>
          <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Axonova Consulting
          </div>
        </div>
      </body>
      </html>
    `;await t.emails.send({from:p,to:d,subject:`New Contact - ${o}${a&&"General Inquiry"!==a?` (${a})`:""}`,html:v});let m=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Axonova Consulting</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background-color: #0b3937; color: #ffffff; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${o}!</h1>
            <p style="margin: 10px 0 0; color: #a9fa60; font-weight: 600;">Axonova Consulting</p>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333;">We've received your enquiry and a member of our team will get back to you shortly.</p>
            ${a?`<p style="font-size: 14px; color: #555;">Regarding: <strong>${a}</strong></p>`:""}
            <div style="margin-top: 25px; padding: 20px; background-color: #f0f4ff; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #555;">In the meantime, feel free to explore our services at <a href="https://axonovaconsulting.co.uk" style="color: #0b3937; font-weight: 600;">axonovaconsulting.co.uk</a></p>
            </div>
            <p style="margin-top: 30px; font-size: 16px; color: #333;">Best regards,</p>
            <p style="font-size: 16px; font-weight: 600; color: #0b3937;">The Axonova Consulting Team</p>
          </div>
          <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Axonova Consulting
          </div>
        </div>
      </body>
      </html>
    `;return await t.emails.send({from:p,to:r,subject:"Thank you for contacting Axonova Consulting",html:m}),l.NextResponse.json({success:!0},{status:200})}catch(e){return console.error("Error in contact API:",e),l.NextResponse.json({success:!1,error:"Internal server error"},{status:500})}}let u=new n.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/contact/route",pathname:"/api/contact",filename:"route",bundlePath:"app/api/contact/route"},resolvedPagePath:"/home/user/Desktop/programming/clients/axonova/landingpage/src/app/api/contact/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:x,workUnitAsyncStorage:g,serverHooks:f}=u;function v(){return(0,s.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:g})}},6487:()=>{},8335:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[638,452,458],()=>o(6836));module.exports=r})();