import React from 'react'
import './About.css'
import { colors } from '@mui/material'
import { useState } from 'react';

export default function About() {
  const [yescolor, setyesColor] = useState('');
  const [nocolor, setnoColor] = useState('');
 const toggleyesColor = () => {
    setyesColor((yescolor === 'blue' ? 'white' : 'blue'))};
    const togglenoColor = () => {
    setnoColor((nocolor === 'blue' ? 'white' : 'blue'))};

  return (
    <div className='container'>
      <h2 className='not'>Welcome! Provide responses to questions that reference the actual architecture of your company </h2>
      <div className='internet'> 
      <h3>1/Internet: </h3>
      
       Internet user security audit:
       <div>
     <strong>Does the computer network have any equipment that can be used to filter visited URLs, such as a proxy server or a firewall?</strong><br/>
      &bull;Does it have blocked risk categories such as Phishing, Command and Control, Malware, Hacking, Proxy, Adult, etc.?<br/>
      &bull;Is it able to authenticate users (AD pairing, Kerberos, captive portal, etc.)?<br/>
      &bull;Are there logs of visited URLs that are retained and analyzable (usage report, etc.)?<br/>
      <button>YES</button> 
      <button>NO</button>
       </div>
       <div>
      <strong>Does the filtering equipment have application detection capabilities?</strong><br/>
      <button>YES</button>
      <button>NO</button>
</div>
     
      
    
      <div>
        <strong>Does the network have malware detection capabilities?</strong><br/>
        • Is the detection system enabled for the primary propagation vectors (HTTP, SMTP, IMAP, POP, FTP, SMB, etc.)? <br/>
        • Does the analysis system support a variety of file formats (EXE, DOC, XLS, PDF, APK, JAR, archives, Flash, etc.)?<br/>
        • Is the equipment capable of SSL decryption, and is it enabled?<br/> 
        • Bonus: Is the solution capable of dynamic file analysis, rather than static analysis based on a hash?<br/>
        <button>YES</button>
        <button>NO</button>
      </div>
      <div>
      <strong>Does the network have intrusion detection capabilities?</strong><br/>
      <button>YES</button>
      <button>NO</button>
      </div>
      </div>


     <div className='DMZ'>
      <h3>2/DMZ:</h3>
      
      If services are published to the internet, it is important to ensure information security against both opportunistic and targeted attacks.
        <div>
        <strong>Is a demilitarized zone (DMZ) in place to isolate internet-facing servers from the LAN?</strong><br/>
        <button>YES</button>
        <button>NO</button>
        </div>
      <div>
      <strong>Are open ports on the internet identified, limited, and necessary?</strong><br/>
      <button>YES</button>
      <button>NO</button>
      </div>
      <div>
      <strong>Is a strict IPS filter in place on incoming traffic? Or a Web Application Firewall for a web application?</strong><br/>
      <button>YES</button>
      <button>NO</button>
      </div>
</div>
<div className='LAN_segmentation'>
  <h3>3/LAN segmentation:</h3>
  A ransomware attack like Wannacry or any other cyberattack can happen even if you think you are safe. Therefore, it is essential to limit the impact of an intrusion by network segmentation. Regardless of the scenario, the intrusion must be limited to a reasonable percentage of workstations and servers in order not to jeopardize your business.
  <div>
  <strong>Is there a strict segmentation between infrastructure support servers and other servers and users?</strong><br/>
  <button>YES</button>
  <button>NO</button>
  </div>
  <div>
    <strong>Is there segmentation or fine-grained filtering rules, or even an IPS between different user groups (standard, VIPN), between users and business servers, between business server groups, or between site</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>   
<div className=' AUTHENTICATION'>
  <h3>4/ AUTHENTICATION</h3>
  Access management is at the heart of security issues. It is about facilitating authorized access to different services while protecting them from unauthorized access.
  <div>
    <strong>Do users easily remember their passwords without writing them down and access different services?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>

  <div>
    <strong>Are authentications centralized?</strong>
    <br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  
  <div>
    <strong>Is the number of passwords to remember reasonable? Do users who need to have many different identifiers (external services not managed by the IT department) have a robust password manager?</strong>
    <br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  
  <div>
    <strong>Do critical services and external access have strong authentication?</strong>
    <br/>
    <button>YES</button>
    <button>NO</button>
  </div>


  <div>
    <strong>Are former users disabled?</strong>
    <br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  </div> 

<div className='UPDATE'>
  <h3>5/UPDATE</h3>
  It is possible to consider that any software system has undiscovered vulnerabilities. However, publishers are making increasing efforts to find vulnerabilities in their own software. They even offer bounties in case of discovery by a third party! Therefore, there are regularly security updates for software components whose exploit codes are known or will become known
  <div>
    <strong>Is there a strategy for updating operating systems (clients and servers)?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>

  <div>
    <strong>Is there a software update strategy?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>

  <div>
    <strong>Is there an inventory of software that cannot be updated and has vulnerabilities, and is there a strategy to mitigate the risk posed by this software?

</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>

  <div>
    <strong>Are all the software components of a system known and understood?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='ANTIVIRUS_AND_MORE'>
  <h3>6/ANTIVIRUS AND MORE</h3>
  Today, an antivirus is a security tool designed to protect workstations and servers. It often integrates a suite of security tools such as antivirus, behavioral analysis, IPS, sandbox, anti-spam, anti-phishing, web page analysis, and workstation audit.
  <div>
    <strong>Are workstations and servers protected against known malware?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Does the deployed solution have a suite of security tools that enhance its effectiveness beyond the known signature base?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Does a centralized management console allow for the deployment of security policies and other advanced functions (auditing, monitoring, software deployment, etc.)?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='Encryption'>
  <h3>7/Encryption</h3>
  In the event of a loss or theft of a device (phone, laptop), encryption is the barrier that helps to limit the loss to a material cost. The same is true in a network, point-to-point encryption is what prevents data interception and impersonation.
  <div>
    <strong>Are all mobile devices that potentially carry company data or credentials encrypted?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are remote access connections encrypted?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are business-critical access to the company encrypted?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='BackupDisasterRecovery'>
  <h3>8/Backup / Disaster Recovery</h3>
  Backup is classified as "recovery" and not "prevention" or "protection". It is obviously one of the solutions that allows the company to resume its activity in the event of a major incident.
  <div>
    <strong>Are the most important data well included in the backup sets?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are the RTO (recovery time objective, i.e., downtime) and RPO (recovery point objective, i.e., data loss) in line with the requirements?

</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Is the backup monitored?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Is the backup working? Can we restore different types of data?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Is the backup outsourced?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Is there a Business Continuity Plan (BCP) for all probable scenarios? Are the RTO and RPO in line with the requirements?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='BringYourOwnDeviceBYOD'>
  <h3>9/Bring Your Own Device (BYOD)</h3>
  With the increasing number of cloud-based access and mobility, it is common for users to use their personal devices for work-related activities. However, this practice poses a risk, as the device is not controlled and secured while it has access to and contains company data.
  <div>
   <div>
    <strong>If BYOD is allowed, is it regulated?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  </div>
  <div>
    <strong>Is it impossible to prevent unauthorized or uncontrolled BYOD usage?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='InformationSecurityPolicy'>
  <h3>10/Information Security Policy</h3>
  A security policy is a document (or set of documents) that outlines the organization's security rules.
  <div>
    <strong>Do you have a security policy?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Does it cover all the important topics?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Is it applicable in real-world conditions?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are the affected parties aware of its existence?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='SENSIBILISATION'>
  <h3>11/SENSIBILISATION</h3>
  There is no security update for humans. However, with awareness, it is possible to reduce human risk and gain security.
  <div>
    <strong>Are users aware of the cybersecurity risks (phishing, malware, data breaches, etc.)?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are there regular awareness activities and reminders?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Are new hires made aware of the risk?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
</div>
<div className='provider'>
  <h3>12/provider</h3>
  Although providers are not directly part of an organization's information system, they can still be a weak link in security.
  <div>
    <strong>Have the providers ratified your security policy?</strong><br/>
    <button>YES</button>
    <button>NO</button>
  </div>
  <div>
    <strong>Do the providers have data or access from their own hardware? If so, have they been audited or have they demonstrated their security level to be in line with your information system?</strong><br/>
    <button onClick={toggleyesColor} style={{ backgroundColor: yescolor }} >YES</button>
    <button onClick={togglenoColor} style={{ backgroundColor: nocolor }}  >NO</button>
  </div>

</div>


 </div>

  )
}
