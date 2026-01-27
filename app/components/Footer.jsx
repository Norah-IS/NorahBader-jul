import React from "react";
export default function Footer () {
    return (
        <footer className="listStyle">
            <div className="lastBox">
                <div className="footer">
                    <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                    <ul>
                        <li className="listStyle"><a href="https://www.linkedin.com/in/norah-is?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbkJZXVHgQ7%2BdbszMdIhwaw%3D%3D"><img className="contatct-photo" src="/images/social.png" alt="LinkedIn" /></a></li>
                        <li className="listStyle"><a href="tel:966500548747"><img className="contatct-photo" src="/images/phone.png" alt="Phone" /></a></li>
                        <li className="listStyle"><a href="mailto:norah.b.aljulayfi@gmail.com"><img className="contatct-photo" src="/images/mail.png" alt="Email" /></a></li>
                        <li className="listStyle"><a href="https://github.com/Norah-IS"><img className="contatct-photo" src="/images/github.png" alt="GitHub" /></a></li>
                    </ul>
                </div>
                <div className="footer">
                    <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                    <ul>
                        <li className="listStyle"><a className="hover:underline text-gray-300" href="/">Home</a></li>
                        <li className="listStyle"><a className="hover:underline text-gray-300" href="/about">About</a></li>
                        <li className="listStyle"><a className="hover:underline text-gray-300" href="/Projects">Projects</a></li>
                        <li className="listStyle"><a className="hover:underline text-gray-300" href="/expe">Experince</a></li>
                    </ul>
                </div>
                <div className="lastParagraph">
                    <p>© 2026 code with Norah Aljulayfi</p>
                </div>
            </div>
        </footer>
    )
}
