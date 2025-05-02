<template lang="pug">
    .container
        img(src="~/assets/img/jrmsu-log.png")
        h2 The 2025 SSG Election
        
        
        .notice-banner
                .notice-border
                    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                        path(stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z")

                .section
                    p For problems during voting, please reach the Creatives Team by clicking the social icons below:

                    div
                        a(href="#!")
                            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48")
                                path(fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z")
                                path(fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z")
                        a(href="#!")
                            svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48")
                                path(fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z")
                                path(fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z")



        .position-container(v-for="position in 10")
            .header
                h3 President
                .chip 1/1

            .candidates-container(v-for="candidate in 3" :class="{'active': candidate == 1}")
                img(src="~/assets/img/candidate.jpg")
                
                .info
                    h5 President
                    h2 Crist "Brader" Briand


                svg(v-if="candidate != 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                    path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
                svg(v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                    path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd")


        
        
        
        
        
        
        .footer
            p For problems during voting, please reach the Creatives Team by clicking the social icons below:

            div
                a(href="#!")
                    svg(xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48")
                        path(fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z")
                        path(fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z")
                a(href="#!")
                    svg(xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48")
                        path(fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z")
                        path(fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z")
    
    </template>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 50px 0;
  max-width: 500px;
  margin: auto;
}

img {
  max-width: 100px;
  margin: 20px 0;
}

h2 {
  font-size: 25px;
  color: #1d1a71;
  margin: 10px 0;
  font-weight: bold;
}

p {
  margin: 20px 0;
}

.status {
  background-color: rgba(21, 185, 57, 0.2);
  display: inline-block;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #15b938;

  span {
    font-size: 15px;
    font-weight: normal;
    margin: 0;
  }
}

button {
  width: 100%;
  display: block;
  margin-top: 50px;
}



.notice-banner {
  background-color: rgba(29, 26, 113, 0.1);
  margin: 20px 0;
  display: flex;

  .notice-border {
    padding: 5px;
    background-color:rgb(204, 204, 223);

    svg {
      width: 30px;
      margin: 5px;
      color: #1d1a71;
    }
  }

  .section {
    padding: 0 10px;
    text-align: left;

    p {
        font-size: 15px;
    }

    svg {
        width: 40px;
        margin: 5px;
        margin-bottom: 20px;
    }
  }
}

.footer {
  margin-top: 60px;
  text-align: center;

  p {
    font-size: 13px;
    margin: 0;
  }

  div {
    margin: 0 0;
  }

  a {
    display: inline-block;
    margin: 0 10px;
  }

  svg {
    width: 50px;
  }
}

.position-container {
    margin: 30px 0;
    text-align: left;

    .header {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ECECEC;
        margin-bottom: 20px;
        
        
        h3 {
            color: #1d1a71;
            font-size: 20px;
        }

        .chip {
            display: inline-block;
            background-color: #F9C301;
            padding: 5px 20px;
            border-radius: 9999px;
            font-weight: bold;
            font-size: 14px;
        }
    }

    .candidates-container {
        border-radius: 10px;
        padding: 15px;
        border: 2px solid #ECECEC;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 20px 0;
        transition: all .3s cubic-bezier(.25,.8,.25,1);
        

        &:hover {
            border: 2px solid #1d1a71;
        }

        
        svg {
            width: 30px;
            float: right;
            color: #ECECEC;
        }

        img {
            flex: 0 0 100px;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin: 0;
            margin-right: 20px;
            border-radius: 10px;
        }

        .info {
            width: calc(100% - 120px);

            h5 {
                font-size: 15px;
                margin: 0;
                color: #C2C2C2;
                font-weight: bold;
            }

            h2 {
                font-size: 19px;
            }
        }

        &.active {
            box-shadow: 0 0 10px #F9C301;
            border-color: #F9C301;

            svg {
                color: #F9C301;
            }
        }
    }
}
</style>

<script setup>
// use layout HomePage
definePageMeta({
  layout: "homepage",
});
</script>
