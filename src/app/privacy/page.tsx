import Link from "next/link"
import { ArrowLeftIcon } from "@/components/icon/arrow-left"
import { BrandLogo } from "@/components/brand-logo"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Verori, the timestamped proof of delivery platform for freelancers.",
  alternates: { canonical: "https://verori.app/privacy" },
}

const privacyPolicy = `
  <h1>Privacy Policy</h1>
  <p><em>Last updated: November 19, 2026</em></p>

  <p>This Privacy Notice for Verori ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
  <ul>
    <li>Visit our website at <a href="https://verori.app">verori.app</a> or any website of ours that links to this Privacy Notice</li>
    <li>Use Verori. Verori is a client-approval portal designed for solo consultants. It allows users to upload deliverable files, generate secure links, and track when clients view, approve, or request changes on those deliverables.</li>
    <li>Engage with us in other related ways, including any marketing or events</li>
  </ul>

  <p>Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>.</p>

  <h2>Summary of Key Points</h2>
  <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>

  <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. <a href="#1-what-information-do-we-collect">Learn more about personal information you disclose to us.</a></p>

  <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>

  <p><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</p>

  <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. <a href="#2-how-do-we-process-your-information">Learn more about how we process your information.</a></p>

  <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. <a href="#4-when-and-with-whom-do-we-share-your-personal-information">Learn more about when and with whom we share your personal information.</a></p>

  <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. <a href="#8-how-do-we-keep-your-information-safe">Learn more about how we keep your information safe.</a></p>

  <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. <a href="#10-what-are-your-privacy-rights">Learn more about your privacy rights.</a></p>

  <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by emailing <a href="mailto:privacy@verori.app">privacy@verori.app</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>

  <p>Want to learn more about what we do with any information we collect? Review the Privacy Notice in full.</p>

  <h2>Table of Contents</h2>
  <ol>
    <li><a href="#1-what-information-do-we-collect">What Information Do We Collect?</a></li>
    <li><a href="#2-how-do-we-process-your-information">How Do We Process Your Information?</a></li>
    <li><a href="#3-what-legal-bases-do-we-rely-on-to-process-your-personal-information">What Legal Bases Do We Rely On To Process Your Personal Information?</a></li>
    <li><a href="#4-when-and-with-whom-do-we-share-your-personal-information">When And With Whom Do We Share Your Personal Information?</a></li>
    <li><a href="#5-do-we-use-cookies-and-other-tracking-technologies">Do We Use Cookies And Other Tracking Technologies?</a></li>
    <li><a href="#6-is-your-information-transferred-internationally">Is Your Information Transferred Internationally?</a></li>
    <li><a href="#7-how-long-do-we-keep-your-information">How Long Do We Keep Your Information?</a></li>
    <li><a href="#8-how-do-we-keep-your-information-safe">How Do We Keep Your Information Safe?</a></li>
    <li><a href="#9-do-we-collect-information-from-minors">Do We Collect Information From Minors?</a></li>
    <li><a href="#10-what-are-your-privacy-rights">What Are Your Privacy Rights?</a></li>
    <li><a href="#11-controls-for-do-not-track-features">Controls For Do-Not-Track Features</a></li>
    <li><a href="#12-do-united-states-residents-have-specific-privacy-rights">Do United States Residents Have Specific Privacy Rights?</a></li>
    <li><a href="#13-do-we-make-updates-to-this-notice">Do We Make Updates To This Notice?</a></li>
    <li><a href="#14-how-can-you-contact-us-about-this-notice">How Can You Contact Us About This Notice?</a></li>
    <li><a href="#15-how-can-you-review-update-or-delete-the-data-we-collect-from-you">How Can You Review, Update, Or Delete The Data We Collect From You?</a></li>
  </ol>

  <h2 id="1-what-information-do-we-collect">1. What Information Do We Collect?</h2>
  <p><strong>Personal information you disclose to us</strong></p>
  <p><em>In Short:</em> We collect personal information that you provide to us.</p>
  <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

  <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
  <ul>
    <li>names</li>
    <li>email addresses</li>
    <li>contact or authentication data</li>
    <li>uploaded files and client context notes</li>
  </ul>

  <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
  <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

  <p><strong>Information automatically collected</strong></p>
  <p><em>In Short:</em> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
  <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
  <p>Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Notice: <a href="https://verori.app/cookies">https://verori.app/cookies</a>.</p>

  <p>The information we collect includes:</p>
  <ul>
    <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
    <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
  </ul>

  <h2 id="2-how-do-we-process-your-information">2. How Do We Process Your Information?</h2>
  <p><em>In Short:</em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>
  <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
  <ul>
    <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
    <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
    <li><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
    <li><strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</li>
    <li><strong>To identify usage trends.</strong> We may process information about how you use our Services to better understand how they are being used so we can improve them.</li>
    <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
    <li><strong>Deliverable Processing.</strong> To store and display uploaded files to the intended client via a secure link. (Retention period: Until the consultant deletes the portal.)</li>
    <li><strong>Approval Tracking.</strong> To log activity events (viewed, approved, changes requested) to provide a timestamped record of delivery. (Retention period: Until the consultant deletes the portal.)</li>
  </ul>

  <h2 id="3-what-legal-bases-do-we-rely-on-to-process-your-personal-information">3. What Legal Bases Do We Rely On To Process Your Information?</h2>
  <p><em>In Short:</em> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>

  <p><strong>If you are located in the EU or UK, this section applies to you.</strong></p>
  <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
  <ul>
    <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. <a href="#10-what-are-your-privacy-rights">Learn more about withdrawing your consent.</a></li>
    <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
    <li><strong>Legitimate Interests.</strong> We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
      <ul>
        <li>Analyze how our Services are used so we can improve them to engage and retain users</li>
        <li>Diagnose problems and/or prevent fraudulent activities</li>
      </ul>
    </li>
    <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
    <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
  </ul>

  <p><strong>If you are located in Canada, this section applies to you.</strong></p>
  <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
  <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
  <ul>
    <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
    <li>For investigations and fraud detection and prevention</li>
    <li>For business transactions provided certain conditions are met</li>
    <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
    <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
    <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
    <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
    <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
    <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
    <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
    <li>If the information is publicly available and is specified by the regulations</li>
    <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
  </ul>

  <h2 id="4-when-and-with-whom-do-we-share-your-personal-information">4. When And With Whom Do We Share Your Personal Information?</h2>
  <p><em>In Short:</em> We may share information in specific situations described in this section and/or with the following third parties.</p>

  <p><strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We may share your data with third-party vendors, service providers, contractors, or agents ("third parties") who perform services for us or on our behalf and require access to such information to do that work. We have contracts in place with our third parties, which are designed to help safeguard your personal information. This means that they cannot do anything with your personal information unless we have instructed them to do it. They will also not share your personal information with any organization apart from us. They also commit to protect the data they hold on our behalf and to retain it for the period we instruct.</p>

  <p>The third parties we may share personal information with are as follows:</p>
  <ul>
    <li><strong>Payment Processing:</strong> Paddle (acts as our Merchant of Record)</li>
    <li><strong>Cloud Computing Services:</strong> Supabase</li>
    <li><strong>Data Backup and Security:</strong> Supabase</li>
    <li><strong>Web and Mobile Analytics:</strong> Vercel</li>
    <li><strong>Website Hosting:</strong> Vercel</li>
    <li><strong>Email Delivery:</strong> Resend</li>
  </ul>

  <p>We also may need to share your personal information in the following situations:</p>
  <ul>
    <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
  </ul>

  <h2 id="5-do-we-use-cookies-and-other-tracking-technologies">5. Do We Use Cookies And Other Tracking Technologies?</h2>
  <p><em>In Short:</em> We may use cookies and other tracking technologies to collect and store your information.</p>
  <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
  <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements or to tailor advertisements to your interests. The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
  <p>To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section <a href="#12-do-united-states-residents-have-specific-privacy-rights">"Do United States Residents Have Specific Privacy Rights?"</a></p>
  <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice: <a href="https://verori.app/cookies">https://verori.app/cookies</a>.</p>

  <h2 id="6-is-your-information-transferred-internationally">6. Is Your Information Transferred Internationally?</h2>
  <p><em>In Short:</em> We may transfer, store, and process your information in countries other than your own.</p>
  <p>Our servers are located in the United States. Regardless of your location, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see "When And With Whom Do We Share Your Personal Information?" above), including facilities in the United States, and other countries.</p>
  <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>

  <p><strong>European Commission's Standard Contractual Clauses:</strong></p>
  <p>We have implemented measures to protect your personal information, including by using the European Commission's Standard Contractual Clauses for transfers of personal information between our group companies and between us and our third-party providers. These clauses require all recipients to protect all personal information that they process originating from the EEA or UK in accordance with European data protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have implemented similar appropriate safeguards with our third-party service providers and partners and further details can be provided upon request.</p>

  <h2 id="7-how-long-do-we-keep-your-information">7. How Long Do We Keep Your Information?</h2>
  <p><em>In Short:</em> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
  <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
  <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

  <h2 id="8-how-do-we-keep-your-information-safe">8. How Do We Keep Your Information Safe?</h2>
  <p><em>In Short:</em> We aim to protect your personal information through a system of organizational and technical security measures.</p>
  <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

  <h2 id="9-do-we-collect-information-from-minors">9. Do We Collect Information From Minors?</h2>
  <p><em>In Short:</em> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
  <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>.</p>

  <h2 id="10-what-are-your-privacy-rights">10. What Are Your Privacy Rights?</h2>
  <p><em>In Short:</em> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
  <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a href="#14-how-can-you-contact-us-about-this-notice">"How Can You Contact Us About This Notice?"</a> below.</p>
  <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>

  <p>If you are located in the UK and are unhappy with how we have handled your personal information, you can make a complaint directly to us. This is in addition to the rights you have under the UK General Data Protection Regulation and the Data Protection Act 2018.</p>

  <p><strong>How to contact us:</strong></p>
  <ul>
    <li>Online: <a href="https://verori.app/contact">https://verori.app/contact</a></li>
    <li>Email: <a href="mailto:privacy@verori.app">privacy@verori.app</a></li>
    <li>Post: See <a href="#14-how-can-you-contact-us-about-this-notice">"How Can You Contact Us About This Notice?"</a></li>
  </ul>

  <p><strong>What happens after you complain:</strong></p>
  <ul>
    <li>We will acknowledge your complaint within 30 days of receiving it.</li>
    <li>We will investigate without unjustifiable or excessive delay.</li>
    <li>We will keep you informed of progress and explain the outcome.</li>
  </ul>

  <p>If you are not happy with our final response, you can refer your complaint to the Information Commissioner's Office, the UK supervisory authority.</p>
  <ul>
    <li>Website: <a href="https://ico.org.uk/make-a-complaint">ico.org.uk/make-a-complaint</a></li>
    <li>Helpline: 0303 123 1113</li>
    <li>Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
  </ul>

  <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.</p>
  <p>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>

  <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a href="#14-how-can-you-contact-us-about-this-notice">"How Can You Contact Us About This Notice?"</a> below.</p>
  <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

  <p><strong>Account Information</strong></p>
  <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
  <ul>
    <li>Contact us using the contact information provided.</li>
  </ul>
  <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

  <p><strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. For further information, please see our Cookie Notice: <a href="https://verori.app/cookies">https://verori.app/cookies</a>.</p>
  <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>.</p>

  <h2 id="11-controls-for-do-not-track-features">11. Controls For Do-Not-Track Features</h2>
  <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
  <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>

  <h2 id="12-do-united-states-residents-have-specific-privacy-rights">12. Do United States Residents Have Specific Privacy Rights?</h2>
  <p><em>In Short:</em> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>

  <p><strong>Categories of Personal Information We Collect</strong></p>
  <p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section <a href="#1-what-information-do-we-collect">"What Information Do We Collect?"</a></p>

  <table>
    <thead>
      <tr>
        <th>Category</th>
        <th>Examples</th>
        <th>Collected</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>A. Identifiers</td>
        <td>Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
        <td>YES</td>
      </tr>
      <tr>
        <td>B. Personal information as defined in the California Customer Records statute</td>
        <td>Name, contact information, education, employment, employment history, and financial information</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>C. Protected classification characteristics under state or federal law</td>
        <td>Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>D. Commercial information</td>
        <td>Transaction information, purchase history, financial details, and payment information</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>E. Biometric information</td>
        <td>Fingerprints and voiceprints</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>F. Internet or other similar network activity</td>
        <td>Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
        <td>YES</td>
      </tr>
      <tr>
        <td>G. Geolocation data</td>
        <td>Device location</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>H. Audio, electronic, sensory, or similar information</td>
        <td>Images and audio, video or call recordings created in connection with our business activities</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>I. Professional or employment-related information</td>
        <td>Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>J. Education Information</td>
        <td>Student records and directory information</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>K. Inferences drawn from collected personal information</td>
        <td>Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
        <td>NO</td>
      </tr>
      <tr>
        <td>L. Sensitive personal Information</td>
        <td></td>
        <td>NO</td>
      </tr>
    </tbody>
  </table>

  <p>We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
  <ul>
    <li>Receiving help through our customer support channels;</li>
    <li>Participation in customer surveys or contests; and</li>
    <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
  </ul>

  <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
  <ul>
    <li>Category A - As long as the user has an account with us</li>
    <li>Category F - As long as the user has an account with us</li>
  </ul>

  <p><strong>Sources of Personal Information</strong></p>
  <p>Learn more about the sources of personal information we collect in <a href="#1-what-information-do-we-collect">"What Information Do We Collect?"</a></p>

  <p><strong>How We Use and Share Personal Information</strong></p>
  <p>Learn more about how we use your personal information in the section, <a href="#2-how-do-we-process-your-information">"How Do We Process Your Information?"</a></p>

  <p><strong>Will your information be shared with anyone else?</strong></p>
  <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <a href="#4-when-and-with-whom-do-we-share-your-personal-information">"When And With Whom Do We Share Your Personal Information?"</a></p>
  <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
  <p>We have not sold or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We have disclosed the following categories of personal information to third parties for a business or commercial purpose in the preceding twelve (12) months:</p>
  <ul>
    <li>Category A. Identifiers</li>
  </ul>
  <p>The categories of third parties to whom we disclosed personal information for a business or commercial purpose can be found under <a href="#4-when-and-with-whom-do-we-share-your-personal-information">"When And With Whom Do We Share Your Personal Information?"</a></p>

  <p><strong>Your Rights</strong></p>
  <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
  <ul>
    <li>Right to know whether or not we are processing your personal data</li>
    <li>Right to access your personal data</li>
    <li>Right to correct inaccuracies in your personal data</li>
    <li>Right to request the deletion of your personal data</li>
    <li>Right to obtain a copy of the personal data you previously shared with us</li>
    <li>Right to non-discrimination for exercising your rights</li>
    <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
  </ul>

  <p>Depending upon the state where you live, you may also have the following rights:</p>
  <ul>
    <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
    <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
    <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
    <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
    <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
    <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
    <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
  </ul>

  <p><strong>How to Exercise Your Rights</strong></p>
  <p>To exercise these rights, you can contact us by emailing us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>, or by referring to the contact details at the bottom of this document.</p>
  <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>

  <p><strong>Request Verification</strong></p>
  <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
  <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

  <p><strong>Appeals</strong></p>
  <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

  <p><strong>California "Shine The Light" Law</strong></p>
  <p>California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a href="#14-how-can-you-contact-us-about-this-notice">"How Can You Contact Us About This Notice?"</a></p>

  <h2 id="13-do-we-make-updates-to-this-notice">13. Do We Make Updates To This Notice?</h2>
  <p><em>In Short:</em> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
  <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>

  <h2 id="14-how-can-you-contact-us-about-this-notice">14. How Can You Contact Us About This Notice?</h2>
  <p>If you have questions or comments about this notice, you may email us at <a href="mailto:privacy@verori.app">privacy@verori.app</a> or contact us by post at:</p>
  <p><strong>Verori</strong><br />
  Owned and operated by <strong>Mel Adry Olivo</strong> <br/>
  Iloilo City, 5000<br />
  Philippines<br />
  <a href="mailto:privacy@verori.app">privacy@verori.app</a></p>

  <h2 id="15-how-can-you-review-update-or-delete-the-data-we-collect-from-you">15. How Can You Review, Update, Or Delete The Data We Collect From You?</h2>
  <p>Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please email us at <a href="mailto:privacy@verori.app">privacy@verori.app</a>.</p>
`

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-8 h-full">
        <Link
          href="/"
          className="inline-flex gap-2 items-center text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4"
        >
          <ArrowLeftIcon /> Back
        </Link>
        <div className="flex flex-col gap-4">
          <BrandLogo href="/" />
        </div>

        <div
          suppressHydrationWarning
          className="prose prose-xs sm:prose-sm prose-zinc dark:prose-invert max-w-none
              [&_bdt]:inline

              prose-headings:font-semibold prose-headings:tracking-tight
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3

              prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:underline-offset-4 prose-a:decoration-emerald-600/30 hover:prose-a:decoration-emerald-600

              prose-table:border-collapse prose-table:w-full prose-table:my-6
              prose-th:border prose-th:border-zinc-300 dark:prose-th:border-zinc-700 prose-th:p-3 prose-th:bg-zinc-50 dark:prose-th:bg-zinc-900 prose-th:text-left prose-th:font-semibold
              prose-td:border prose-td:border-zinc-300 dark:prose-td:border-zinc-700 prose-td:p-3 prose-td:align-top

              prose-ul:list-[square] prose-ul:marker:text-zinc-400 dark:prose-ul:marker:text-zinc-600
              prose-li:my-1.5 prose-li:pl-1

              prose-p:leading-relaxed prose-p:mb-4
              prose-strong:font-semibold prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100"
          dangerouslySetInnerHTML={{ __html: privacyPolicy }}
        />
      </div>
    </main>
  )
}
