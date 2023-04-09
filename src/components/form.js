import React from "react";


export default function FormComponent() {
    return (
        <div>
            <div class="row m-auto">
                <div class="col-lg-8 m-auto my-5">
                    <div class="box_cart d-flex flex-column align-items-center">
                        <div class="message" style={{ display: "none" }}>
                            <p>Exisitng Customer? <a href="##">Click here to login</a></p>
                        </div>
                        <div class="user-profile d-flex align-items-center mb-3">
                            <img src="https://bucketdata.blob.core.windows.net/s3data/starclinchwpimages/starclinch1/wp-content/uploads/2019/03/ranbir-kapoor-profile.jpg" alt="" loading="lazy" class="gm-observing gm-observing-cb" style={{ width: '100px', borderRadius: '100%' }} />
                            <h4>Ranbir <br /> Kapoor</h4>
                        </div>
                        <div class="step">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group ">
                                        <label class="mb-1">What's the occasion?</label>
                                        <select id="ddlModels" onchange="if (!window.__cfRLUnblockHandlers) return false; EnableDisableTextBox(this)" class="form-control custom-select" name="billing_event_type" required="">
                                            <option value="" selected="" hidden="">Select Type</option>
                                            <option value="Virtual">Virtual</option>
                                            <option value="Video Shoutout">Video Shoutout</option>
                                            <option value="Campus">Campus</option>
                                            <option value="Corporate">Corporate</option>
                                            <option value="Private Party">Private Party</option>
                                            <option value="Concert/Festival">Concert/Festival</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Restaurant">Restaurant</option>
                                            <option value="Professional Hiring">Professional Hiring</option>
                                            <option value="Inauguration">Inauguration</option>
                                            <option value="Photo/Video Shoot">Photo/Video Shoot</option>
                                            <option value="Religious">Religious</option>
                                            <option value="Charity">Charity</option>
                                            <option value="Fashion Show">Fashion Show</option>
                                            <option value="Kids Party">kids Party</option>
                                            <option value="Exhibition">Exhibition</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group" id="input_date">
                                        <label class="active">Event Date</label>
                                        <input class="form-control" type="date" name="billing_event_date" id="billing_event_date" placeholder="When.." required="" />
                                        <i class="icon_calendar active"></i>
                                        <div class="daterangepicker ltr auto-apply single opensright"><div class="ranges">
                                        </div>
                                            <div class="calendar left single" style={{ display: "block" }}>
                                                <div class="calendar-table"></div>
                                                <div class="calendar-time" style={{ display: "none" }}>
                                                </div>
                                            </div>
                                            <div class="calendar right" style={{ display: "none" }}>
                                                <div class="calendar-table"></div><div class="calendar-time" style={{ display: "none" }}>
                                                </div>
                                            </div>
                                            <div class="drp-buttons">
                                                <span class="drp-selected">
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Venue Address</label>
                                        <input type="text" class="form-control" name="billing_event_venue" id="input-venue" required="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Budget </label>
                                        <input type="number" id="billing_event_budget" name="billing_event_budget" min="12500000" class="form-control" required="" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>How many people will attend?</label>
                                        <input type="number" id="billing_event_gathering_size" name="billing_event_gathering_size" class="form-control" required="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control" id="billing_first_name" name="billing_first_name" required="" />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <label>Email Address (No Spam!) </label>
                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="billing_email" name="billing_email" class="form-control" required="" />
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <div class="row no-gutters">
                                            <div class="col-md-12">
                                                <label class="block_label">Mobile Number</label>
                                            </div>
                                            <div class="col-3 col-sm-4 col-md-4">
                                                <div class="iti iti--allow-dropdown">
                                                    <div class="iti__flag-container">
                                                        <div class="col-9 col-sm-8 col-md-8">
                                                            <input id="billing_phone" class="form-control" name="billing_phone" type="tel" placeholder="Phone Number" required="" autocomplete="off" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="custom-control custom-switch" id="whatsapp" style={{ display: "none" }}>
                                            <label class="switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" value="yes" checked="" />
                                                <span class="slider round"></span>
                                            </label>
                                            <span class="switch-txt">Send OTP on Whatsapp</span>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <div class="form-group">
                                                    <label>Tell us more (we love to listen)</label>
                                                    <textarea id="billing_event_information" name="billing_event_information" class="form-control" row="2" cols="5"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row align-items-center">
                                            <div class="col-3 col-sm-3 col-md-2">
                                                <div class="select-group" style={{ margin: "0 0 10px 0" }}>

                                                    <select class="form-control custom-select" name="billing_more_budget" required="">
                                                        <option value="Yes" selected="" hidden="">Yes</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">Don't</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-9 col-sm-9 col-md-10">
                                                <h6 style={{ margin: "0 0 10px 0" }}>Send more options in my budget</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />


                                    <div id="policy" style={{ display: "none" }}>
                                        <p class="nomargin">Your personal details will be used to process your order and support your experience throughout this website. For further queries please visit our
                                            <a href="#0">privacy policy.</a></p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 m-auto">
                                <div class="box_detail">
                                    <div class="custom-control custom-switch" id="whatsapp1">
                                        <label for='whatsappNotification'>
                                            <input id='whatsappNotification' type="checkbox" class="custom-control-input" name="quotes_on_whatsapp" value="yes" />
                                            Send Quotes on Whatsapp
                                        </label>
                                    </div>
                                    <button className="requirementPostBtn buttonBorder">
                                        Show Best Price
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}