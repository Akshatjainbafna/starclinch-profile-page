import React from "react";
import './allTheStyles.css';


export default function FooterComponent() {
    return (
        <>
            <footer id="footer">
                <div class="footer-top">
                    <div class="d-flex justify-content-center">
                        <div class="go-back">
                            <a class="btn" href="##" onclick="if (!window.__cfRLUnblockHandlers) return false; javascript:history.go(-1)"> <i class="fa fa-arrow-left" aria-hidden="true"></i> Go Back</a>
                        </div>
                    </div>
                </div>
                <div class="footer-btm center-title py-5" data-bg="https://stcdn.starclinch.in/mobile/images/profile/footer_bg.svg" loading="lazy" data-gmlazy="true">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-12 col-lg-3">
                                <div class="footer-items">
                                    <h3>REGISTERED ENTITY:</h3>
                                    <p>
                                        VINSM Globe Pvt Ltd<br /> GSTIN: 07AAFCK1574R1ZX<br /> CIN: U52605DL2012PTC236944<br /> Phone: <a href="tel:+91 7042 88 4270">+91 7042 88 4270</a><br />
                                    </p>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="footer-items">
                                    <h3>FOR BUYERS</h3>
                                    <ul>
                                        <li><a href="https://starclinch.com/our-buyers">Our Buyers</a></li>
                                        <li><a href="https://starclinch.com/browse">Browse</a></li>
                                        <li><a href="https://starclinch.com/book">Post Your Requirement</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-lg-2">
                                <div class="footer-items">
                                    <h3>FOR ARTISTS</h3>
                                    <ul>
                                        <li><a href="https://artist.starclinch.com/">Login</a></li>
                                        <li><a href="https://artist.starclinch.com/">Artist SignUp</a></li>
                                        <li><a href="https://starclinch.com/artist-subscriptions">Artist Membership</a></li>
                                        <li><a href="https://starclinch.com/jobs">Jobs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-lg-2">
                                <div class="footer-items">
                                    <h3>ABOUT US</h3>
                                    <ul>
                                        <li><a href="https://starclinch.com/our-story">Our Story</a></li>
                                        <li><a href="https://starclinch.com/contact-us">Contact Us</a></li>
                                        <li><a href="https://starclinch.zohorecruit.in/jobs/Careers">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12 col-lg-2">
                                <div class="footer-items">
                                    <h3>POLICY</h3>
                                    <ul>
                                        <li><a href="https://starclinch.com/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="https://starclinch.com/terms-of-use">Terms of Use</a></li>
                                        <li><a href="https://starclinch.com/disclaimer">Disclaimer</a></li>
                                        <li><a href="https://starclinch.com/faqs">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="footer-copy-right">
                                    <p>© Copyright 2015-
                                        <script type="text/javascript">
                                            document.write(new Date().getFullYear());
                                        </script>2023 | VINSM Globe Pvt. Ltd. | All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}