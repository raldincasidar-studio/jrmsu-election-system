<template lang="pug">
.container
    //- Component Spinning Logo
    SpinningLogo

    .context-container
        .containerx
            .fancy-navbar
                a.back-button(@click="$router.back()")
                    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                        path(stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18")
                
                .content-y
                    img(src="~/assets/img/jrmsu-log.png")
                    h1 JRMSU SSG Electronic Election Portal

                a.empty

            h2 Hi Raldin!
            p.chips-container
                span.chip 23-A-00045

            p It looks like you are first time using the #[a(href="https://www.jrmsu.edu.ph" target="_blank" rel="noopener noreferrer") JRMSU-SSG EEP]. Please confirm your details if correct before we proceed
            .section-container
                h4 Basic Information

                .input-container
                    label Student ID
                    input(type="text" placeholder="Student ID: eg. 25-A-00000")

                .input-container
                    label First Name
                    input(type="text" placeholder="First Name")

                .input-container
                    label Middle Name
                    input(type="text" placeholder="Middle Name")

                .input-container
                    label Last Name
                    input(type="text" placeholder="Last Name")

                .input-container
                    label Birth Date
                    input(type="date" placeholder="Birth Date")

                .input-container
                    label Gender
                    select
                        option(value="Male") Male
                        option(value="Female") Female

            .section-container
                h4 Contact Information

                .input-container
                    label Email address
                    input(type="email" placeholder="Email address")

                .input-container
                    label Mobile Number
                    input(type="text" placeholder="Mobile Number")

            .section-container
                h4 College Details

                .input-container
                    label School Year
                    select
                        option(value="2023-2024") 2023-2024
                        option(value="2024-2025") 2024-2025

                .input-container
                    label Year
                    select
                        option(value="1st") 1st
                        option(value="2nd") 2nd
                        option(value="3rd") 3rd
                        option(value="4th") 4th

                .input-container
                    label Semester
                    select
                        option(value="1st") 1st
                        option(value="2nd") 2nd

                .input-container
                    label College
                    select
                        option(value="CAS") CAS
                        option(value="CIT") CIT
                        option(value="COE") COE
                        option(value="CHS") CHS

                .input-container
                    label Course
                    select
                        option(value="BSIT") BSIT
                        option(value="BSCS") BSCS
                        option(value="BSECE") BSECE
                        option(value="BSN") BSN

            .section-container
                h4 Confirmation

                p.confirmation(@click="isTrueInfoChecked = !isTrueInfoChecked")
                    svg(v-if="!isTrueInfoChecked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                        path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
                    svg(v-else class="checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                        path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd")
                    span I confirm that all the information provided is true and correct.


                p.confirmation(@click="isAuthorizeDataChecked = !isAuthorizeDataChecked")
                    svg(v-if="!isAuthorizeDataChecked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                        path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
                    svg(v-else class="checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                        path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd")
                    span I declare and authorize the CCS-Creatives Commitee, the JRMSU-Main SSG and the JRMSU Main Campus to use my data for the purpose of conducting online election.



            button(type="submit" @click="$router.push('/home')") Register
</template>

<style lang="scss" scoped>
.container {
    min-height: 100vh;
    display: flex;


    .context-container {
        text-align: center;
        padding: 20px;
        width: 50%;

        .containerx {
            max-width: 500px;
            margin: auto;
        }

        .fancy-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a.back-button {
                vertical-align: middle;
                // border: 1px solid red; 
                border-radius: 50%;
                display: flex;
                align-items: center;
                padding: 10px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

                &:hover {
                    background-color: rgba(0, 0, 0, 0.161);
                }

                &:active {
                    transform: scale(0.90);
                }
            }
            svg {
                width: 25px;
            }

            
            .content-y {
                display: flex;
                align-items: center;
                
                img {
                    width: 50px;
                    margin-right: 10px;
                }

                h1 {
                    font-size: 17px;
                    color: #1d1a71;
                    text-align: left;
                }
            }

        }

        h2 {
            margin: 50px 15px;
            margin-bottom: 0;;
            color: #1d1a71;
        }

        p.chips-container {
            margin-top: 10px;
            margin-bottom: 50px;

            .chip {
                background-color: #F9C301;
                display: inline-block;
                padding: 10px 15px;
                border-radius: 9999px;
                font-size: 13px;
                font-weight: bold;

            }
        }

        p {
            margin: 20px;
        }

        .section-container {
            margin: 40px 0;

            h4 {
                font-size: 20px;
                color: #1d1a71;
                border-bottom: 1px solid #ECECEC;
                padding: 5px 0;
            }

            p.confirmation {
                font-size: 15px;
                color: #1d1a71;
                margin: 20px 0;
                vertical-align: middle;
                margin-right: 20px;
                display: flex;
                cursor: pointer;
                align-items: flex-start;

                span {
                    text-align: left;
                    padding-left: 20px;
                }

                svg {
                    vertical-align: middle;
                    width: 30px;
                    flex: 0 0 30px;
                    color: rgba(0, 0, 0, 0.26);

                    &.checked {
                        color: #F9C301;
                    }
                }

                &:hover svg {
                    opacity: 0.6;
                }
            }

        }
    }
}

@media (max-width: 850px) {
    .container {
        flex-direction: column;
        .image-logo {
            width: 100%;
            height: 50vh;
            display: none;
        }
        .context-container {
            width: 100%;
        }
    }
}
</style>

<script setup>

const isTrueInfoChecked = ref(false);
const isAuthorizeDataChecked = ref(false);

</script>