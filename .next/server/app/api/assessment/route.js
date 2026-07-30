(()=>{var e={};e.id=552,e.ids=[552],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5420:(e,t,o)=>{"use strict";o.r(t),o.d(t,{patchFetch:()=>w,routeModule:()=>h,serverHooks:()=>b,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>v});var n={};o.r(n),o.d(n,{POST:()=>x});var s=o(2706),a=o(8203),r=o(5994),i=o(9187),l=o(8220);let d=require("mongoose");var p=o.n(d);let c=process.env.MONGODB_URI;if(!c)throw Error("MONGODB_URI environment variable is not set");let u=global.mongoose;async function g(){return u.conn||(u.promise||(u.promise=p().connect(c,{bufferCommands:!1}).then(e=>e)),u.conn=await u.promise),u.conn}u||(u=global.mongoose={conn:null,promise:null});let m=new(p()).Schema({answers:{type:Object,required:!0},totalScore:{type:Number,required:!0},recommendationTitle:{type:String,default:null}},{timestamps:!0}),f=p().models.Assessment||p().model("Assessment",m);async function x(e){try{let{userData:t,answers:o,totalScore:n,recommendationTitle:s}=await e.json()||{},{name:a,email:r}=t;if(!o||"number"!=typeof n)return i.NextResponse.json({success:!1,error:"Invalid payload"},{status:400});await g();let d=await f.create({answers:o,totalScore:n,recommendationTitle:s||null}),p=d._id?.toString(),c=process.env.TEAM_EMAIL,u=process.env.FROM_EMAIL;if(process.env.RESEND_API_KEY){let e=new l.u(process.env.RESEND_API_KEY),t=function(e,t){let o,n,s,a,r,i;let l="#0b3937",d="#a9fa60";t>=80?(o="AI Leader",n="Highly Ready",s="Your business is primed to scale AI as a core capability. You have strong strategy, infrastructure, and culture. Focus on maximizing your competitive advantage.",a=["Scale AI across multiple functions for maximum impact and integration.","Explore advanced applications (Generative AI, predictive models) to drive innovation.","Develop an enterprise-wide AI playbook and robust governance model.","Build a long-term AI roadmap aligned to innovation or product strategy."],r="#4CAF50",i="✅"):t>=60?(o="AI Explorer",n="Moderately Ready",s="You have a solid foundation and cultural openness to begin embedding AI more deeply into operations, but some gaps remain, particularly in scaling.",a=["Scale successful pilots across departments to realize measurable ROI.","Address specific weak spots (e.g., governance, infrastructure, staff skills) revealed in the assessment.","Prioritize 2–3 high-value AI use cases with measurable returns and clear ownership.","Build a structured change management approach to ensure organization-wide adoption."],r="#2196F3",i="\uD83D\uDE80"):t>=40?(o="AI Beginner",n="Low Readiness",s="Interest exists, and you show potential, but critical foundations are missing, particularly in integrated strategy, technology, and data governance.",a=["Improve data collection and governance; focus on data quality and accessibility.","Start with low-risk pilots to build confidence and gather internal case studies.","Invest strategically in staff training and AI literacy across all departments.","Assign an “AI Champion” internally to drive momentum and coordinate initiatives.","Begin documenting SOPs for future AI-powered workflows."],r="#FF9800",i="\uD83D\uDFE1"):(o="AI Unprepared",n="Very Low Readiness",s="You are just beginning your AI journey. Focus first on leadership buy-in, data quality, and basic digital transformation before advanced AI integration.",a=["Develop leadership alignment on the strategic value of AI.","Run internal workshops on AI potential and risks to build foundational awareness.","Train employees on AI Foundations and basic tools (e.g., specific Copilots).","Audit your existing digital systems and address critical infrastructure gaps.","Identify one non-technical team to experiment with a simple AI tool (e.g., HR, marketing)."],r="#F44336",i="\uD83D\uDED1");let p=a.map(e=>`<li style="margin-bottom: 12px; line-height: 1.5; font-size: 14px; color: #333333; padding-left: 10px;">${e}</li>`).join("");return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your AI Readiness Assessment Results - Axonva Consulting</title>
        <style>
            body { 
                font-family: 'Arial', sans-serif; 
                background-color: #f7f9fc; 
                margin: 0; 
                padding: 0; 
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            .container { 
                max-width: 600px; 
                margin: 30px auto; 
                background-color: #ffffff; 
                border-radius: 12px; 
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08); 
                overflow: hidden; 
                border: 1px solid #e0e0e0;
            }
            .header { 
                background-color: ${l}; 
                color: #ffffff; 
                padding: 35px 30px 20px 30px; 
                text-align: center; 
            }
            .header h1 { 
                margin: 0; 
                font-size: 26px; 
                font-weight: 700; 
            }
            .logo-placeholder {
                color: ${d};
                font-size: 20px;
                font-weight: 900;
                margin-bottom: 15px;
            }
            .tagline {
                font-size: 14px;
                font-weight: 400;
                color: #cccccc;
                margin-top: 10px;
            }
            .content { 
                padding: 30px; 
                color: #333333; 
            }
            .score-card { 
                background-color: #f0f4ff; 
                padding: 25px; 
                border-radius: 8px; 
                text-align: center; 
                margin-bottom: 25px; 
                border: 2px solid ${r};
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }
            .score-card h2 { 
                margin: 0 0 10px 0; 
                color: ${l}; 
                font-size: 18px; 
                font-weight: 600; 
            }
            .score-number { 
                font-size: 52px; 
                font-weight: 800; 
                color: ${r}; 
                line-height: 1; 
            }
            .readiness-level { 
                font-size: 22px; 
                font-weight: 700; 
                color: ${l}; 
                margin-top: 10px; 
            }
            .rating-badge { 
                display: inline-block; 
                padding: 6px 18px; 
                background-color: ${r}; 
                color: ${l}; 
                border-radius: 25px; 
                font-weight: 700; 
                margin-top: 15px; 
                font-size: 14px; 
                text-transform: uppercase;
                background-color: ${d};
            }
            .section-title { 
                font-size: 20px; 
                color: ${l}; 
                margin-top: 35px; 
                margin-bottom: 15px; 
                border-bottom: 2px solid ${d}; 
                padding-bottom: 8px; 
                font-weight: 700; 
            }
            ul { 
                list-style-type: disc; 
                padding-left: 20px; 
                margin-top: 20px;
            }
            .insight { 
                background-color: #fff9e6; 
                border-left: 4px solid #ffc107; 
                padding: 15px; 
                margin-bottom: 20px; 
                border-radius: 4px; 
                font-style: italic;
                color: #555555;
            }
            .contact-info {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px dashed #cccccc;
                text-align: center;
                font-size: 14px;
            }
            .footer { 
                background-color: #eeeeee; 
                color: #777777; 
                padding: 20px; 
                text-align: center; 
                font-size: 12px; 
                border-top: 1px solid #e0e0e0; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo-placeholder">AXONVA CONSULTING</div>
                <h1>Your AI Readiness Assessment Results</h1>
                <p class="tagline">AI Consultation Done Right</p>
            </div>
            <div class="content">
                <p style="font-size: 16px;">Hello <strong>${e}</strong>,</p>
                <p style="font-size: 16px; margin-bottom: 25px;">Thank you for completing your assessment. We've compiled a summary of your results and a customized action plan to guide your next steps in AI adoption.</p>
                
                <div class="score-card">
                    <h2>Overall AI Readiness Rating:</h2>
                    <p class="score-number">${t}<span style="font-size: 24px; font-weight: 400; color: #333;">/100</span></p>
                    <p class="readiness-level">${i} ${o}</p>
                    <span class="rating-badge">${n}</span>
                </div>

                <div class="section-title">Key Insight</div>
                <div class="insight">
                    <p style="margin: 0; color: ${l};">${s}</p>
                </div>

                <div class="section-title">Tailored Next Steps</div>
                <p style="font-size: 16px; margin-bottom: 20px;">Based on your current readiness, we recommend the following strategic actions:</p>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${p}
                </ul>
                
                <div class="contact-info">
                    <p style="margin: 0; font-weight: 600; color: ${l};">Ready to execute your AI roadmap?</p>
                    <p style="margin-top: 5px;">
                        <a href="[Link to Scheduling Page]" style="color: ${l}; text-decoration: none; font-weight: 700;">Schedule a Strategy Session</a>
                        or reply to this email.
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-top: 30px;">Best regards,</p>
                <p style="font-size: 16px; font-weight: 600; color: ${l};">The Axonva Consulting Team</p>

            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Axonva Consulting. AI Consultation Done Right.
            </div>
        </div>
    </body>
    </html>
    `}(a,n);await e.emails.send({from:u,to:[c,r],subject:`New AI Readiness Assessment – score ${n}`,html:t})}return i.NextResponse.json({success:!0,id:p},{status:200})}catch(e){return console.error("Error in assessment API:",e),i.NextResponse.json({success:!1,error:"Internal server error"},{status:500})}}let h=new s.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/assessment/route",pathname:"/api/assessment",filename:"route",bundlePath:"app/api/assessment/route"},resolvedPagePath:"/home/user/Desktop/programming/clients/axonova/landingpage/src/app/api/assessment/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:y,workUnitAsyncStorage:v,serverHooks:b}=h;function w(){return(0,r.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:v})}},6487:()=>{},8335:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),n=t.X(0,[638,452,458],()=>o(5420));module.exports=n})();