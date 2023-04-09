import React from "react";


export default function TestimonialsComponent() {
    return (
        <div style={{margin: '2vh 5vw'}}>
            <div class="row justify-content-between center-title">
                <div class="col-md-5">
                    <div class="title-div">
                        <h3 class="title-bg-heading"><span>Why StarClinch</span></h3>
                    </div>
                    <div class="our-brand-list">
                        <ul>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i>
                                <p>Reliable Booking Partner - 10K+ bookings in the last 8 years</p>
                            </li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i>
                                <p>ONLY VC funded Entertainment startup</p>
                            </li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i>
                                <p>Follow ESCROW model</p>
                            </li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i>
                                <p>Leverage the TECH; Hence, don't overcharge</p>
                            </li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i>
                                <p>Specialized in CORPORATE Events</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <h3 class="title-bg-heading"><span>Brands we've worked with</span></h3>
                    <div class="our-running-brand">
                        <div class="our-brand-right">
                            <img alt="" class="lazy img-fluid gm-observing gm-observing-cb" data-src="https://stcdn.starclinch.in/images/home/our_brand_logos_new.svg" loading="lazy" src="https://stcdn.starclinch.in/images/home/our_brand_logos_new.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}