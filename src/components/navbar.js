import React from "react";
import Logo from '../assets/StarClinch-Logo-new.svg'
import './allTheStyles.css';

export default function NavbarComponent() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" style={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)' }}>
                <div className="d-flex">
                <a class="navbar-brand" href="/RanbirKapoor">
                    <img className="img-fluid" src={Logo} alt="StarClinch" style={{ width: '50%' }} />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                </div>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav ms-5 me-auto my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: "100px" }}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle me-5" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Entertainers
                            </a>
                            <ul class="dropdown-menu submenu">
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-anchor-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-anchor-online">Anchor/Emcee</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-celebrity-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-celebrity-online">Celebrity Appearance</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-comedian-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-comedian-online">Comedian</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-dancer-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-dancer-online">Dancer/Troupe</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-dj-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-dj-online">Dj</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-instrumentalist-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-instrumentalist-online">Instrumentalist</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-band-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-band-online">Live Band</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-magician-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-magician-online">Magician</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-makeup-artist-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-makeup-artist-online">Make-Up Artist/Stylist</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-model-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-model-online">Model</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-photographer-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-photographer-online">Photo/Videographer</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-singer-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-singer-online">Singer</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-speaker-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-speaker-online">Speaker</a>
                                    </span>
                                </li>
                                <li className="li_menu dropdown">
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/book-variety-artist-online.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a className="sub-menu-target" href="https://starclinch.com/book-variety-artist-online">Variety Artist</a>
                                    </span>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="##" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Join Community
                            </a>
                            <ul class="dropdown-menu submenu">
                                <li>
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/login.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a href="https://artist.starclinch.com/">Login</a>
                                    </span>
                                </li>
                                <li>
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/signup.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a href="https://artist.starclinch.com/">Signup</a>
                                    </span>
                                </li>
                                <li>
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/jobs.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a href="https://starclinch.com/jobs">Jobs</a>
                                    </span>
                                </li>
                                <li>
                                    <span className="submenu-icons">
                                        <img className="lazy img-fluid" src="https://stcdn.starclinch.in/header/artists_subscription.webp" alt="" />
                                    </span>
                                    <span className="submenu-links">
                                        <a href="https://starclinch.com/artist-subscriptions">Artist Membership</a>
                                    </span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <button className="requirementPostBtn mx-auto">Post Your Requirement</button>
                    <i class="fas fa-search me-5"></i>
                    <i class="fas fa-shopping-bag"></i>
                </div>
            </nav>
        </>
    )
}