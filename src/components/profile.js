import React from "react";
import { Link } from "react-router-dom";


export default function ProfileComponent() {
    return (
        <div>
            <div class="container d-flex flex-column">
                <div class="breadcrumb-div mt-4">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <span>Home</span>
                                <i class="white right"></i>
                            </li>
                            <li class="breadcrumb-item">
                                <span>CELEBRITY APPEARANCE</span>
                                <i class="white right"></i>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <span>Ranbir Kapoor</span>
                            </li>

                            <input type="text" id="artist_id" value="102352" hidden="true" />
                        </ol>
                    </nav>
                </div>
                <div class="profile-info-img-box my-4">
                    <div class="profile-img-container">
                        <img class="lazy img-fluid rounded" src="https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/03/ranbir-kapoor-profile.jpg" alt="" style={{ minWidth: '350px', objectFit: 'contain' }} />
                    </div>
                    <div class="artist-info-box">
                        <div class="artist-info">
                            <h3>Ranbir Kapoor</h3>
                            <h5>
                                (CELEBRITY APPEARANCE)
                            </h5>
                            <h6>
                                <span><b>Mumbai,</b></span>
                                <span><b>Maharashtra</b></span>
                            </h6>
                        </div>
                        <div>
                            <Link to={`${window.location.origin}/cart/add/102352/`}>
                                <button className="requirementPostBtn buttonBorder my-3">
                                    See Price and Book
                                </button>
                            </Link>
                        </div>
                        <div>
                            <p>The 'ROCKSTAR' who is a heart throb of millions, Ranbir Kapoor is one of the finest actors in Bollywood and is a true versatile performer</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <section class="gallery-video-audio-section" id="gallery-video-audio-section">
                <div class="container d-flex flex-column">
                    <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                        <li class="nav-item">
                            <div class="accordion-header d-flex justify-content-between align-items-center">
                                <div class="accordion-header-icon"><img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/gallery_icon.svg" alt="" /></div>
                                <div class="accordion-header-text ms-2"> Gallery</div>
                            </div>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div class="profile-Masonry">
                                <div class="card-columns gallery">
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26642.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26641.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26640.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26639.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26638.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26637.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26636.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26635.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26634.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26633.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26632.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26631.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26630.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26629.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26628.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26627.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26626.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26625.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26624.jpg" />
                                    </div>
                                    <div class="galleryItem card">
                                        <img class="card-img-top lazy img-fluid" src="https://wpcdn.starclinch.in/2019/03/26623.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div class="profile-Masonry">
                                <div class="card-columns">
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div class="profile-Masonry">
                                <div class="card-columns">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="artist-info-box">
                <div class="artist-info">
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link class="my-3" to={`${window.location.origin}/cart/add/102352/`}>
                            <button className="requirementPostBtn buttonBorder">
                                See Price and Book
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <section class="multiple-accordion-section accordion mt-5">
                <div class="container">
                    <div class="multiple-accordion-div">
                        <div class="same-accordion-items biography-accordion">
                            <div class="accordion-header d-flex justify-content-between align-items-center">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <div class="accordion-header-icon"><img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/biography_icon.svg" alt="" /></div>
                                    <div class="accordion-header-text flex-grow"> Biography</div>
                                </button>
                            </div>
                            <div id="collapseOne" class="accordion-collapse collapse show mx-3" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                Ranbir Kapoor is a Bollywood Superstar. &nbsp; A recipient of several accolades including five FILMFARE AWARDS, he is one of the most popular and highest paid celebrities in India. He &nbsp; is the grandson of well acclaimed Actor-Director Raj Kapoor &nbsp; and the son of &nbsp; actors &nbsp; Neetu Kapoor &nbsp;  &amp;  &nbsp; Rishi Kapoor.
                                At the &nbsp; LEE &nbsp; STRASBERG &nbsp; and THEATER AND FILM INSTITUTE &nbsp; &amp; &nbsp; SCHOOL OF VISUAL ARTS, &nbsp; Ranbir pursued film-making and method acting respectively, following which he assisted &nbsp; SANJAY &nbsp; LEELA &nbsp; BHANSALI &nbsp; on the film &nbsp; BLACK &nbsp; (2005).  &nbsp;  Ranbir &nbsp; Kapoor &nbsp; kick-started his acting debut with &nbsp; Bhansali's &nbsp; Tragic-Romance &nbsp; SAAWARIYA &nbsp; (2007), a performance &nbsp; so ecstatic that he bagged &nbsp;  a &nbsp; Filmfare &nbsp;  Award for THE BEST MALE DEBUT
                                 &nbsp;  3 hit flicks, &nbsp; namely Ajab &nbsp; Prem &nbsp; Ki &nbsp; Ghazab &nbsp; Kahani, &nbsp; Rocket &nbsp; Singh-Salesman &nbsp; Of &nbsp; The &nbsp; Year &nbsp;  &amp;  &nbsp; Wake &nbsp; Up &nbsp; Sid &nbsp; earned &nbsp; him 3 &nbsp; Filmfare &nbsp;  Critics &nbsp; Awards &nbsp; for Best Actor Ranbir &nbsp; Kapoor’s award winning spree &nbsp; was extended with 2 BEST ACTOR &nbsp; awards at &nbsp; FILMFARE &nbsp; with stellar performances in ROCKSTAR &nbsp; (Drama, 2011) and BARFI (Drama-Comedy, 2012),
                                where he played a troubled musician and a deaf-mute man respectively
                                 &nbsp;  He further proved his versatile acting skills by engaging the audiences in films like &nbsp; BOMBAY &nbsp; TALKIES &nbsp; (Appearance), &nbsp; YEH &nbsp; JAWAANI &nbsp;  HAI &nbsp;  DIWANI &nbsp;  (RomanticComedy,2013) &amp; &nbsp; RAJNEETI &nbsp; (Drama, 2010)
                                 &nbsp;  Films aside, Kapoor &nbsp; is a stern supporter of charitable causes and initiatives. He happens to be the Co-Owner of &nbsp; the &nbsp; INDIAN SUPER LEAGUE &nbsp; football team, &nbsp; MUMBAI CITY FC &nbsp; and the &nbsp; Co-Founder of  &nbsp; Picture &nbsp; Shuru &nbsp; Productions
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="multiple-accordion-section accordion mt-5">
                <div class="container">
                    <div class="multiple-accordion-div">
                        <div class="same-accordion-items biography-accordion">

                            <div class="accordion-header d-flex justify-content-between align-items-center">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    <div class="accordion-header-icon"><img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/Performance_Details.svg" alt="" /></div>
                                    <div class="accordion-header-text">Performance Details</div>
                                </button>
                            </div>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="performance-details-section">
                                    <div class="container">
                                        <div class="performance-language-slider">
                                            <div class="row">
                                                <div class="col-6 col-md-3">
                                                    <div class="performance-details-items off-stage">
                                                        <div class="performance-details-items-top">
                                                            <img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/offstage_members_new.svg" alt="" />
                                                        </div>
                                                        <div class="performance-details-items-btm">
                                                            <span><b>
                                                                <h3>4</h3>
                                                                <p>Off Stage Members</p>
                                                            </b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3">
                                                    <div class="performance-details-items performing-members">
                                                        <div class="performance-details-items-top">
                                                            <img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/performing_members_new.svg" alt="" />
                                                        </div>
                                                        <div class="performance-details-items-btm">
                                                            <span><b>
                                                                <h3>1</h3>
                                                                <p>Performing Members</p>
                                                            </b></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3">
                                                    <div class="performance-details-items performance-duration">
                                                        <div class="performance-details-items-top">
                                                            <img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/performance_min_duration_new.svg" alt="" />
                                                        </div>
                                                        <div class="performance-details-items-btm">
                                                            <h3>60 - 120 Min</h3>
                                                            <p>Performance Duration</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6 col-md-3">
                                                    <div class="performance-details-items can-travel">
                                                        <div class="performance-details-items-top">
                                                            <img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/can_travel_new.svg" alt="" />
                                                        </div>
                                                        <div class="performance-details-items-btm">
                                                            <h3>Can Travel</h3>
                                                            <p>Nationwide</p>
                                                            <span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="multiple-accordion-section accordion mt-5">
                <div class="container">
                    <div class="multiple-accordion-div">
                        <div class="same-accordion-items biography-accordion">
                            <div class="accordion-header d-flex justify-content-between align-items-center">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    <div class="accordion-header-icon"><img class="lazy img-fluid" src="https://stcdn.starclinch.in/mobile/images/profile/performance_language_v2.svg" alt="" /></div>
                                    <div class="accordion-header-text">Performance Language</div>
                                </button>
                            </div>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="same-slider-section might-interested-slider">
                                    <div class="container">
                                        <div class="performance-language-slider">
                                            <div class="owl-carousel owl-theme owl-loaded owl-drag">

                                                <p>Hindi</p>
                                                <p>English</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />

            <section class="review-sections">
                <div class="container">
                    <div class="same-accordion-items review-accordion">
                        <div class="accordion-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="reviews-div">
                                        <div class="based-reviews-div">
                                            <h5>0 reviews</h5>
                                        </div>
                                        <div class="post-reviews-div">
                                            <h3>Post a review</h3>
                                            <form id="comment_form">
                                                <span class="gl-star-rating gl-star-rating-ltr" data-star-rating=""><select id="glsr-custom-options" class="star-rating" data-options="{&quot,clearable&quot,:false, &quot,showText&quot,:false}">
                                                    <option value="">Select a rating</option>
                                                    <option value="5">5</option>
                                                    <option value="4">4</option>
                                                    <option value="3">3</option>
                                                    <option value="2">2</option>
                                                    <option value="1">1</option>
                                                </select><span class="gl-star-rating-stars s0"><span data-value="1" data-text="1"></span><span data-value="2" data-text="2"></span><span data-value="3" data-text="3"></span><span data-value="4" data-text="4"></span><span data-value="5" data-text="5"></span></span></span>
                                                <div class="form-group">
                                                    <textarea class="form-control" name="body" id="body" placeholder="Review"></textarea>
                                                </div>
                                                <div class="alert alert-danger" id="invalid_rating" role="alert" style={{ display: "none" }}>
                                                    Please provide ratings
                                                </div>
                                                <div class="submit-btn text-right">
                                                    <input class="btn btn-primary" type="button" id="comment_post" value="POST" />
                                                </div>
                                            </form>
                                        </div>
                                        <div class="reply-review" id="comment_list">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />

            <section class="tags-section">
                <div class="container">
                    <div class="tags-div">
                        <div class="tags-title"><img class="lazy img-fluid" src="/static/mobile/images/profile/tags_icon.svg" alt="" /><h5>Tags:</h5></div>
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai">
                            Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--campus">
                            Campus Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--charity">
                            Charity Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--concert-festival">
                            Concert/Festival Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--corporate">
                            Corporate Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--exhibition">
                            Exhibition Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--fashion-show">
                            Fashion Show Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--inauguration">
                            Inauguration Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--kids-party">
                            Kids Party Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--photo-video-shoot">
                            Photo/Video Shoot Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--private-party">
                            Private Party Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--professional-hiring">
                            Professional Hiring Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--religious">
                            Religious Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--restaurant">
                            Restaurant Celebrity Appearance in Mumbai
                        </a>
                        |
                        <a href="https://starclinch.com/book-celebrity-online/l--mumbai_e--wedding">
                            Wedding Celebrity Appearance in Mumbai
                        </a>
                        |
                        <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Virtual Event </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Wedding </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Restaurant </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Professional </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Private Party </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Photo/Video</p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Kids Party </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Inaugration </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Fashion Show </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Exhibition </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Corporate </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Charity </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Hire Ranbir Kapoor for Campus </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Virtual Event </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Wedding </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Restaurant </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Professional </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Private Party </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Photo/Video</p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Kids Party </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Inaugration </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Fashion Show </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Exhibition </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Corporate </p>
                        <p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>Book Ranbir Kapoor for Charity </p><p style={{ display: "inline" }}>|</p> <p style={{ color: '#A6ADB2', display: 'inline' }}>BookRanbir Kapoor for Campus </p>
                    </div>
                </div>
            </section>
        </div>
    )
}