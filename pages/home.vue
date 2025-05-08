<template lang="pug">
.container
    Transition(name="blur" mode="out-in")
        div(v-if="isLoading")
            //- img(src="~/assets/img/jrmsu-log.png")
            br
            img(src="~/assets/img/loader.svg")
            //- h2 The 2025 SSG Election
            p We are loading election details, please wait...
        div(v-else)
            img(src="~/assets/img/jrmsu-log.png")
            h2 The 2025 SSG Election
            p Welcome to the 2025-2026 SSG Election. The election is now open for voting. Please cast your vote on or before the scheduled voting schedule.
            p
                span.status(v-if="hasAlreadyVoted")
                    svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                        path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
                    | You have already casted your vote
                span.status(:class="{ closed: isClosed }" v-else) {{ isClosed ? 'Already Closed' : 'Open for voting' }}
            button(@click="$router.push('/start-voting')" v-if="!isClosed && !hasAlreadyVoted") Start Voting

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

.blur-enter-active, .blur-leave-active {
  transition: filter 0.5s;
}
.blur-enter, .blur-leave-to /* .blur-leave-active in <2.1.8 */ {
  filter: blur(10px);
}


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

    svg {
        width: 30px;
        margin: 10px;
        vertical-align: middle;
    }

    span {
        font-size: 15px;
        font-weight: normal;
        margin: 0;
    }

    &.closed {
        background-color: rgba(255, 0, 0, 0.2);
        color: #FF0000;
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

const { $toast } = useNuxtApp();
const userData = useCookie('UserData');

// use layout HomePage
definePageMeta({
  layout: 'homepage',
  title: userData.value ? `${userData.value.Student_Name}` : 'Home'
})


const isLoading = ref(true);
const isClosed = ref(true);
const hasAlreadyVoted = ref(true);

async function setPageTitleToName() {

    if (userData.value) {
        useHead({
            title: `${userData.value.Student_Name}`
        });
    }
}

async function checkElectionAvailability() {

    isLoading.value = true;


    const { data, error } = await useMyFetch('Election/Schedule/Check', {
        method: 'post',
        body: {
            School_Year: userData.value.School_Year
        }
    });

    if (!data.value.Status || error.value) {
        $toast.fire({
            title: data.value?.Status || 'Can not check election availability',
            icon: 'error'
        })
        isLoading.value = false;
        return;
    }

    // console.log(data.value.Status, 'haha');
    isClosed.value = !/open/i.test(data.value.Status);

    // check if student have already voted
    const { data: hasVoted, error: hasVotedError } = await useMyFetch('Election/User/Status', {
        method: 'post',
        body: {
            Voter_ID: userData.value.Student_ID,
            School_Year: userData.value.School_Year
        }
    });

    if (!hasVoted.value.Status || hasVotedError.value) {
        $toast.fire({
            title: hasVoted.value?.Status || 'Can not check election availability',
            icon: 'error'
        })
        isLoading.value = false;
        return;
    }

    hasAlreadyVoted.value = /already/i.test(hasVoted.value.Status);

    
    setTimeout(() => {
        isLoading.value = false;
    }, 1000);
}

onMounted(() => {
    setPageTitleToName();
    checkElectionAvailability();
})
</script>