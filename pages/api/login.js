const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    let transporter = await nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      auth: {
        user: "support@vsaexchange.com",
        pass: "VSAexchange@123",
      },
    });

    await transporter.sendMail({
      from: "support@vsaexchange.com",
      to: req.body.email,
      subject: "[VSAexchange] New Sign in",
      html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 220px) {
  .u-row {
    width: 200px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 200px !important;
  }

}

@media (max-width: 220px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: #169179">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 200px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #169179;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:200px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="200" style="background-color: #169179;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #169179;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://assets.unlayer.com/projects/174604/1690470408441-8E43C486-6728-40F0-9DD1-D33475202D6F.jpeg" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 180px;" width="180"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 200px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:200px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://assets.unlayer.com/projects/174604/1690470687764-5F9570E1-07E2-4A5D-9CFD-B7C40808EE13.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 180px;" width="180"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 20px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <div>
<div>
<div data-originalcomputedfontsize="14" data-originalfontsize="14px">Dear (Name) ,</div>
</div>
</div>
<div>
<div>
<div data-originalcomputedfontsize="14" data-originalfontsize="14px">You logged into VSA Exchange</div>
</div>
</div>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 200px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:200px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="200" style="background-color: #ced4d9;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ced4d9;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 23px; line-height: 140%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 140%;">Account: ${req.body.email}</p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">IP: ${req.body.ip}</p>
<p style="line-height: 140%;"> </p>
<p style="line-height: 140%;">Time: ${new Date().toUTCString()}</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 200px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:200px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="200" style="width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 18px; line-height: 190%; text-align: left; word-wrap: break-word;">
    <p style="line-height: 190%;">Note: If you did not submit this application, your account may have been stolen. Please <a rel="noopener" href="https://u15071047.ct.sendgrid.net/ls/click?upn=PC4QStp3E-2BPhc8uZt1PVWWWvOxf9HXR0cQRqvVgyJ7Ls1ZU88Dti-2FhRPqGWf38g4-2FfyFK87gLbnLvcrCmNsN-2BA-3D-3D8GH8_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOycCRVAsqc5AsnnFzSXXwF-2B0-2Fl8w5-2B6dZzM2xohlHJJ2m-2FasenBYnbbBXJSx1MUX6YTegQg8oak6zRBc5Tx7YXr0dBpU2rcwcMo43NCzk8hHU4BK4bbOdb3x3I4E98jvz2YYZmyUyr-2FdxmYVhG611vX" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u15071047.ct.sendgrid.net/ls/click?upn%3DPC4QStp3E-2BPhc8uZt1PVWWWvOxf9HXR0cQRqvVgyJ7Ls1ZU88Dti-2FhRPqGWf38g4-2FfyFK87gLbnLvcrCmNsN-2BA-3D-3D8GH8_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOycCRVAsqc5AsnnFzSXXwF-2B0-2Fl8w5-2B6dZzM2xohlHJJ2m-2FasenBYnbbBXJSx1MUX6YTegQg8oak6zRBc5Tx7YXr0dBpU2rcwcMo43NCzk8hHU4BK4bbOdb3x3I4E98jvz2YYZmyUyr-2FdxmYVhG611vX&amp;source=gmail&amp;ust=1690483066722000&amp;usg=AOvVaw3qymYuusxCpSAoglzNauJg" data-removefontsize="true" data-originalcomputedfontsize="14">change your password</a> immediately.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 200px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:200px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="200" style="background-color: #169179;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 200px;display: table-cell;vertical-align: top;">
  <div style="background-color: #169179;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
        
  <div style="font-size: 20px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word;">
    <div data-originalfontsize="14px" data-originalcomputedfontsize="14">24/7 <a rel="noopener" href="https://u15071047.ct.sendgrid.net/ls/click?upn=PC4QStp3E-2BPhc8uZt1PVWZdzeDpgct5Vez6k4ushAbrmcvroSTqM6PNMpSRV0PvHzPCk_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOzU0FI2XzAYDG139SqhHfWDW-2FyiUR7kLKdM0UogvvKZdt1Rf5nxUiAVW9Kiqt7PFPcIquwntwu5Nr6P9NScCjzm3hgRbHZnxyCHT2brJGdIUNgOAI7pmccLT7o9nGC3fLvN4yBC0sc2K20D3lfCqzUg" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u15071047.ct.sendgrid.net/ls/click?upn%3DPC4QStp3E-2BPhc8uZt1PVWZdzeDpgct5Vez6k4ushAbrmcvroSTqM6PNMpSRV0PvHzPCk_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOzU0FI2XzAYDG139SqhHfWDW-2FyiUR7kLKdM0UogvvKZdt1Rf5nxUiAVW9Kiqt7PFPcIquwntwu5Nr6P9NScCjzm3hgRbHZnxyCHT2brJGdIUNgOAI7pmccLT7o9nGC3fLvN4yBC0sc2K20D3lfCqzUg&amp;source=gmail&amp;ust=1690483066723000&amp;usg=AOvVaw0LgkX4RJPdFGF9sw810048" data-removefontsize="true" data-originalcomputedfontsize="14">Help Center</a> &amp; <a rel="noopener" href="https://u15071047.ct.sendgrid.net/ls/click?upn=PC4QStp3E-2BPhc8uZt1PVWZdzeDpgct5Vez6k4ushAbrmcvroSTqM6PNMpSRV0PvHHeaK_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOzWGp3hNXvf-2FtY7ZRWZ45kRVX8rTe2pMIbd3c7usPMF6OB7ua-2FSsYIpP4xEFy-2BRlk5NzRgn7QqzCOgPOWqsl8bs3BTf011rJJsKj54jjb86KIRVXxFZ-2FcX4xRlD223FSOeyfsAZ4WrZJEery7EbO-2Bpp" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://u15071047.ct.sendgrid.net/ls/click?upn%3DPC4QStp3E-2BPhc8uZt1PVWZdzeDpgct5Vez6k4ushAbrmcvroSTqM6PNMpSRV0PvHHeaK_G9lxsnSaDqr7Vf8IfMrjzvlLYhH2F4fkbKPLbxFhrJbjK0-2F4uZFA2kqVJnVSXsz-2B7-2FA5V84ZRXCQoPlHMDB7-2BSZn41aND0PO3dTFtA8YgBWH7EAnz-2FYJ1qYa2d0UIad7yfTaXV2rTaY7dVcTR-2FMlxmjwbuYaI0vpAlpdDuzBEOzWGp3hNXvf-2FtY7ZRWZ45kRVX8rTe2pMIbd3c7usPMF6OB7ua-2FSsYIpP4xEFy-2BRlk5NzRgn7QqzCOgPOWqsl8bs3BTf011rJJsKj54jjb86KIRVXxFZ-2FcX4xRlD223FSOeyfsAZ4WrZJEery7EbO-2Bpp&amp;source=gmail&amp;ust=1690483066723000&amp;usg=AOvVaw1sV10CZihRRDiHt8E3ujP5" data-removefontsize="true" data-originalcomputedfontsize="14">Live Support</a></div>
<div data-originalfontsize="14px" data-originalcomputedfontsize="14">© 2018 - 2023 VSAExchange.com. All Rights Reserved.</div>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>`,
    });
  }
  res.status(200).json({ msg: "sent email" });
}
