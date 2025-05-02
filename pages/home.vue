<template lang="pug">
.container
    img(src="~/assets/img/jrmsu-log.png")
    h2 The 2025 SSG Election
    p Welcome to the 2025-2026 SSG Election. The election is now open for voting. Please cast your vote on or before the scheduled voting schedule.
    p
        span.status OPEN #[br] #[span May 13 2024 7:00 AM - May 13 2025 8:00 PM]

    button(@click="$router.push('/start-voting')") Start Voting

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
    margin: 20px 0
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
    background-color:rgba(21, 185, 57, 0.2);
    display: inline-block;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    color: #15B938;

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
</style>


<script setup>

// use layout HomePage
definePageMeta({
  layout: 'homepage'
})
</script>