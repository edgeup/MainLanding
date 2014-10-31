<?php
//error_reporting(E_ALL);

require 'mandrillLibrary/Mandrill.php';

$APIKey = "ZTjEy5b0VIeb4MnZxxeEtw";

// Get all the values from the form
$email = $_POST['email'];

$mandrill = new Mandrill($APIKey);

$message = array(
	'subject' => 'Thank you for signing up from Competitive Edge',
    'from_email' => 'no-reply@competitive.com',
    'from_name' => 'Competitive Edge',
	'to' => array(
        array(
        	'email' => $email
        )
    ),
    'headers' => array(
    	'MIME-Version' => '1.0',
    	'Content-type' => 'text/html; charset=iso-8859-1'
	),
    'important' => true,
    'track_opens' => true,
    'track_clicks' => true,
    // HTML PASTE BEGINS HERE
    'html' => '<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#5b6f81">
    
    	<style type="text/css">
		.ReadMsgBody { width: 100%; background-color: #ffffff; }
		.ExternalClass { width: 100%; background-color: #ffffff; }
		.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
		html { width: 100%; }
		body { -webkit-text-size-adjust: none; -ms-text-size-adjust: none; margin: 0; padding: 0; }
		table { border-spacing: 0; border-collapse: collapse; }
		img { display: block !important; }
		table td { border-collapse: collapse; }
		.yshortcuts a { border-bottom: none !important; }
		a { color: #3498db; text-decoration: none; }
		.textbutton a { font-family: \'open sans\', arial, sans-serif !important; color: #ffffff !important; }
		 @media only screen and (max-width: 640px) {
		body { width: auto !important; }
		table[class="table600"] { width: 450px !important; text-align: center !important; }
		table[class="table-inner"] { width: 90% !important; }
		table[class="table2-2"] { width: 47% !important; text-align: left !important; }
		table[class="table3-3"] { width: 100% !important; text-align: center !important; }
		table[class="table1-3"] { width: 29% !important; }
		table[class="table3-1"] { width: 64% !important; text-align: left !important; }
		/* Image */
		img[class="img1"] { width: 100% !important; height: auto !important; }
		}
		 @media only screen and (max-width: 479px) {
		body { width: auto !important; }
		table[class="table600"] { width: 290px !important; }
		table[class="table-inner"] { width: 82% !important; }
		table[class="table2-2"] { width: 100% !important; text-align: center !important; }
		table[class="table3-3"] { width: 100% !important; text-align: center !important; }
		table[class="table1-3"] { width: 100% !important; }
		table[class="table3-1"] { width: 100% !important; text-align: center !important; }
		/* image */
		img[class="img1"] { width: 100% !important; }
		}
		</style>

      <!-- logo -->

      <tr>
         <td>
            <table width="600" border="0" align="center" cellpadding="0" cellspacing="0" class="table600">
               <tr>
                  <td height="125" align="center" valign="top" background="http://edgeup.co/email/blue/img/pattern.png" bgcolor="#5b6f81" style="background-position:top; background-repeat:no-repeat;">
                     <table class="table600" width="600" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                           <td height="30"></td>
                        </tr>

                        <!-- logo -->
                        <tr>
                           <td align="center" height="95">
                              <img style="display:block; font-size:0px; line-height:0px; border:0px;" src="http://edgeup.co/email/blue/img/logo.png" width="175" height="116" alt="logo" />
                           </td>
                        </tr>
                        <!-- end logo --> </table>
                  </td>
               </tr>
            </table>
         </td>
      </tr>

      <!-- end logo -->

          <!-- 1/1 image -->
      <tr>
         <td>
            <table class="table600" bgcolor="#FFFFFF" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
               <tr>
                  <td height="30"></td>
               </tr>
               <tr>
                  <td>
                     <table width="550" border="0" align="center" cellpadding="0" cellspacing="0" class="table-inner">
                        <!-- img -->
                        <tr>
                           <td align="center">
                              <img style="display:block; line-height:0px; font-size:0px; border:0px;" class="img1" src="http://edgeup.co/email/blue/img/thankyouimage.jpg" alt="img" width="550" height="320" />
                           </td>
                        </tr>
                        <!-- end img --> </table>
                  </td>
               </tr>
            </table>
         </td>
      </tr>
      <!-- end 1/1 image -->

      <!-- 1/1 content -->
      <tr>
         <td>
            <table class="table600" bgcolor="#FFFFFF" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
               <tr>
                  <td height="50"></td>
               </tr>
               <tr>
                  <td>
                     <table class="table-inner" width="550" border="0" align="center" cellpadding="0" cellspacing="0">
                        <!-- title -->
                        <tr>
                           <td align="center" style="font-family: \'Open Sans\', Arial, sans-serif; font-size:18px; font-weight:bold; color:#3b3b3b;">NEXT STEPS FOR COMPETITIVE EDGE</td>
                        </tr>
                        <!-- end title -->

                        <tr>
                           <td height="10" style="border-bottom:1px solid #bdc3c7;"></td>
                        </tr>
                        <tr>
                           <td height="10"></td>
                        </tr>
                        <!-- content -->
                        <tr>
                           <td align="center" style="font-family: \'Open Sans\', Arial, sans-serif; font-size:13px; color:#95a5a6; line-height:24px;">
                              We have a team of designer and developers that are working on moving our platform forward. You can follow our progress on Twitter or Facebook.
                           </td>
                        </tr>
                        <!-- end content --> </table>
                  </td>
               </tr>
            </table>
         </td>
      </tr>
      <!-- end 1/1 content -->


      <!-- footer -->
      <tr>
         <td>
            <table width="600" class="table600" border="0" align="center" cellpadding="0" cellspacing="0">
               <tr>
                  <td height="40" bgcolor="#FFFFFF"></td>
               </tr>
               <tr>
                  <td height="50" align="center" bgcolor="#4d6173" style="font-family: \'Open Sans\', Arial, sans-serif; font-size:13px; color:#ffffff; line-height:24px;">
                     Copyright ©
                     <span style="color:#3498db;">Competitive Edge</span>
                     All rights reserved.
                  </td>
               </tr>
               <tr>
                  <td>
                     <table class="table600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                           <td height="120" align="center" valign="top" background="http://edgeup.co/email/blue/img/pattern.png" bgcolor="#5b6f81" style="background-position:top; background-repeat:no-repeat;">
                              <table width="600" class="table600" border="0" cellspacing="0" cellpadding="0">
                                 <tr>
                                    <td height="15"></td>
                                 </tr>

                                 <!-- email option -->
                                 <tr>
                                    <td class="textbutton" align="center" style="font-family: \'Open Sans\', Arial, sans-serif; font-size:13px; color:#ffffff; line-height:24px;">
                                       <a href="#">Unsubscribe</a>
                                       |
                                       <a href="#">Webversion</a>
                                    </td>
                                 </tr>
                                 <!-- end email option -->

                                 <tr>
                                    <td height="15"></td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <table class="table3-3" width="250" border="0" align="center" cellpadding="0" cellspacing="0">
                                          <tr>
                                             <td align="center">
                                                <a href="#">
                                                   <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="http://edgeup.co/email/blue/img/facebook.png" width="8" height="16" alt="facebook" />
                                                </a>
                                             </td>
                                             <td width="10"></td>
                                             <td align="center">
                                                <a href="#">
                                                   <img style="display:block; line-height:0px; font-size:0px; border:0px;" src="http://edgeup.co/email/blue/img/twitter.png" width="16" height="13" alt="twitter" />
                                                </a>
                                             </td>
                                             
                                                </a>
                                             </td>
                                          </tr>
                                       </table>
                                    </td>
                                 </tr>
                              </table>
                           </td>
                        </tr>
                     </table>
                  </td>
               </tr>
            </table>
         </td>
      </tr>
   </table>'
	);
	//HTML PASTE ENDS HERE
$async = false;
$response = $mandrill->messages->send($message, $async);
print_r($response);

?>
