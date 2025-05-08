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
                h2(v-if="isPreviewMode") PLEASE FINALIZE YOUR VOTES
                h2(v-else) Election Result ({{ userData.College_Code }})
                .notice-banner
                        .notice-border
                            svg(xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                                path(stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z")

                        .section
                            p For problems during voting, please reach the Creatives Team by clicking the social icons below:

                            div
                                a(href="https://www.facebook.com/profile.php?id=100095351062233" target="_blank")
                                    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48")
                                        path(fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z")
                                        path(fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z")
                                a(href="https://m.me/100095351062233" target="_blank")
                                    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48")
                                        path(fill="#448AFF" d="M24,4C13.5,4,5,12.1,5,22c0,5.2,2.3,9.8,6,13.1V44l7.8-4.7c1.6,0.4,3.4,0.7,5.2,0.7c10.5,0,19-8.1,19-18C43,12.1,34.5,4,24,4z")
                                        path(fill="#FFF" d="M12 28L22 17 27 22 36 17 26 28 21 23z")


                .position-container(v-for="(pos, position_index) in displayedCandidates" :key="position_index")
                    .header
                        h3 {{ pos?.position }}
                        .chip {{getTotalVotesPerPosition(pos)}} return votes

                    

                    .no-candidate(v-if="pos?.candidates?.length == 0")
                        svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                          path(d="M10.375 2.25a4.125 4.125 0 1 0 0 8.25 4.125 4.125 0 0 0 0-8.25ZM10.375 12a7.125 7.125 0 0 0-7.124 7.247.75.75 0 0 0 .363.63 13.067 13.067 0 0 0 6.761 1.873c2.472 0 4.786-.684 6.76-1.873a.75.75 0 0 0 .364-.63l.001-.12v-.002A7.125 7.125 0 0 0 10.375 12ZM16 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z")
                        p No candidates
                    .flex-content(v-else)
                        CandidateComponent(v-for="(candidate, candidate_index) in pos.candidates" :key="candidate_index" :candidate="candidate" :selected="isCandidateSelected(position_index, candidate)" :votecount="candidate.Votes" :returnees="getTotalVotesPerPosition(pos)")
                
                
                
                .preview-mode-indicator(v-if="isPreviewMode") 
                    svg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                        path(fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" )

                    h3 Vote Confirmation
                    p If you wish to make changes, please click "Go Back to Voting". If you are ready to submit your votes, please click confirm the checkbox and click "SUBMIT VOTE".
                    button(@click="isPreviewMode = false") Go Back



                .section-container(v-if="isPreviewMode")
                    h4 Confirmation

                    p.confirmation(@click="isTrueInfoChecked = !isTrueInfoChecked")
                        svg(v-if="!isTrueInfoChecked" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
                            path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
                        svg(v-else class="checked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
                            path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd")
                        span I confirm that the candidates shown above are correct and i confirm the submission of my vote.


        
        .footer
            p For problems during voting, please reach the Creatives Team by clicking the social icons below:

            div
                a(href="https://www.facebook.com/profile.php?id=100095351062233" target="_blank")
                    svg(xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48")
                        path(fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z")
                        path(fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z")
                a(href="https://m.me/100095351062233" target="_blank")
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

.preview-mode-indicator {
  margin: 20px 0;
  font-size: 15px;
  font-weight: bold;
  background-color: #0ba12b52;
  padding: 20px 10px;
  color: white;
  border-radius: 10px;

  p, h3 {
    margin: 10px;
    color: #09691e;
  }

  p {
    font-weight: normal;
  }

  button {
    margin-top: 30px;
    background-color: white;
  }

  svg {
    width: 50px;
    color: #09691e;
  }
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


  &:disabled {
    background-color: rgb(200, 200, 200);
    color: rgb(135, 135, 135);
  }
}

.notice-banner {
  background-color: rgba(29, 26, 113, 0.1);
  margin: 20px 0;
  display: flex;

  .notice-border {
    padding: 5px;
    background-color: rgb(204, 204, 223);

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
    border-bottom: 1px solid #ececec;
    margin-bottom: 20px;

    h3 {
      color: #1d1a71;
      font-size: 20px;
    }

    .chip {
      display: inline-block;
      background-color: #f9c301;
      padding: 5px 20px;
      border-radius: 9999px;
      font-weight: bold;
      font-size: 14px;
    }
  }

  .no-candidate {
    padding: 20px;
    text-align: center;

    svg {
      width: 50px;
      color: grey;
    }

     p {
      margin: 10px 0;
     }
  }
  

  /* .flex-content {
      display: flex;
      flex-wrap: wrap;
    } */

  .candidates-container {
    /* border-radius: 10px;
    padding: 15px;
    border: 2px solid #ececec;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 20px 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    &:hover {
      border: 2px solid #1d1a71;
    }

    svg {
      width: 30px;
      float: right;
      color: #ececec;
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
        color: #c2c2c2;
        font-weight: bold;
      }

      h2 {
        font-size: 19px;
      }
    }

    &.active {
      box-shadow: 0 0 10px #f9c301;
      border-color: #f9c301;

      svg {
        color: #f9c301;
      }
    } */
  }
}
</style>

<script setup>
// use layout HomePage

const userData = useCookie('UserData');

definePageMeta({
  layout: "homepage",
  title: userData.value ? `${userData.value.Student_Name}` : "Start Voting"

});

const { $toast, $swal } = useNuxtApp();


const positionsWithCandidates = ref([]);

const isLoading = ref(true);

const selectedCandidates = ref([]);
const isTrueInfoChecked = ref(false);


function getTotalVotesPerPosition(position) {
  // console.log(position);
  return position.candidates?.reduce((total, candidate) => {
    return total + candidate.Votes;
  }, 0) || 0;
}

async function getCandidates() {
  isLoading.value = true;
  // get all candidates
  const {data, error} = await useMyFetch('Candidate/Account/ID/Get', {
    method: 'POST',
    body: {
      Election_Year: userData.value.School_Year
    }
  })

  if (!data.value.Record || error.value) {
    $toast.fire({
      title: data.value?.Status || 'Can not get candidates',
      icon: 'error'
    })
    // router.replace('/home');
    return;
  }

  const candidatesRecord = data.value.Record;
  
  // Get candidatte information
  const {data: candidateInfo, error: candidateInfoError} = await useMyFetch('Voter/Profile/Get', {
    method: 'POST',
    body: candidatesRecord
  })

  
  // console.log(candidateInfo.value, 'ha');

  if (!candidateInfo.value.Record || candidateInfoError.value) {
    $toast.fire({
      title: candidateInfo.value?.Status || 'Can not get candidate information',
      icon: 'error'
    })
    // router.replace('/home');
    return;
  }

  const candidateInfoRecord = candidateInfo.value.Record;


  // Filter out the candidates by college
  const {data: candidatesByCollege, error: candidatesByCollegeError} = await useMyFetch('Candidate/Ballot/Generate', {
    method: 'POST',
    body: {
      Election_year: userData.value.School_Year,
      College_Code: userData.value.College_Code,
      Candidate_Info: candidateInfoRecord
    }
  })

  if (!candidatesByCollege.value.Record || candidatesByCollegeError.value) {
    $toast.fire({
      title: candidatesByCollege.value?.Status || 'Can not get candidates by college',
      icon: 'error'
    })
    // router.replace('/home');
    return;
  }


  const candidatesByCollegeContainer = candidatesByCollege.value.Record;

  // Get Result
  const {data: candidateResult, error: candidateResultError} = await useMyFetch('Election/Votes/Result', {
    method: 'POST',
    body: {
      School_Year: userData.value.School_Year,
      College_Code: userData.value.College_Code,
      Candidate_Info: candidatesByCollegeContainer
    }
  })

  if (!candidateResult.value.Record || candidateResultError.value) {
    $toast.fire({
      title: candidateResult.value?.Status || 'Can not get candidates by college',
      icon: 'error'
    })
    // router.replace('/home');
    return;
  }

  // console.log('result: ', candidateResult);
  const candidateResultas = candidateResult.value.Record;

  // // I need to restructure and group the candidates by position
  const candidatesByPosition = {};

  // for (const candidate of candidatesByCollegeContainer) {
    
  //   if (!candidatesByPosition[candidate.Position]) {
  //     candidatesByPosition[candidate.Position] = {
  //       max_votes: candidate.Num_Elected_Officer || 1,
  //       ordering: candidate.Position_Rank || 1,
  //       candidates: [],
  //     };
  //   }

  //   candidatesByPosition[candidate.Position].candidates.push(candidate);


  // }

  const sortedPosition = Object.entries(candidateResultas).map(([position, candidates]) => ({
    position,
    max_votes: 0,
    candidates,
    selectedCandidates: []
  }))

  positionsWithCandidates.value = sortedPosition
  // console.log(positionsWithCandidates.value);

  isLoading.value = false;
}


async function selectCandidate(position_index, candidate) {
  
  console.log(candidate);

  if (isPreviewMode.value) {
    $toast.fire({
      title: 'Click Go back to voting to make changes',
      icon: 'error'
    })
    return;
  }

  // get position index
  const candidateIndex = positionsWithCandidates.value[position_index].selectedCandidates.findIndex(selected => selected.candidate_id === candidate.Candidate_ID);
  
  if (candidateIndex !== -1) {
    positionsWithCandidates.value[position_index].selectedCandidates.splice(candidateIndex, 1);
  } else {

    // check first if position max votes is not reached
    if (positionsWithCandidates.value[position_index].selectedCandidates.length >= positionsWithCandidates.value[position_index].max_votes) {
      await $swal.fire({
        title: 'Max votes reached',
        text: 'Please remove some candidate(s) before adding more',
        icon: 'error'
      })
      return;
    }

    positionsWithCandidates.value[position_index].selectedCandidates.push({
      candidate_id: candidate.Candidate_ID,
    });
  }

  // console.log(positionsWithCandidates.value);

  // console.log('Is candidate selected: ', isCandidateSelected(position_index, candidate));
}

async function confirmVotes() {
  isPreviewMode.value = true;

  const isUndervote = positionsWithCandidates.value.some(position => 
    position.selectedCandidates.length < position.max_votes
  );

  if (isUndervote) {
    const { isConfirmed } = await $swal.fire({
      title: 'Undervote Detected',
      text: 'You have not selected the maximum number of candidates for one or more positions. Do you still want to proceed?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, proceed',
      cancelButtonText: 'Go Back'
    });

    if (!isConfirmed) {
      isPreviewMode.value = false;
      return;
    }
  }


  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 500)
  
}

onMounted(async () => {
  getCandidates();
})


async function submitVote() {
  if (!isTrueInfoChecked.value) {
    $toast.fire({
      title: 'Please check the checkbox to confirm your vote',
      icon: 'error'
    })
    return;
  }


  const votes = positionsWithCandidates.value.map(position => ({
    position_name: position.position,
    candidates: position.selectedCandidates
  }))


  const { isConfirmed } = await $swal.fire({
    title: 'Final Confirmation',
    text: 'Please confirm that you want to submit your final votes. This will be sent to the central server and cannot be changed.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, submit',
    cancelButtonText: 'Go Back'
  });

  if (!isConfirmed) 
    return;

  

  isLoading.value = true;
  

  const { data, error } = await useMyFetch('Election/Votes/Cast', {
    method: 'post',
    body: {
      Voter_ID: userData.value.Student_ID,
      School_Year: userData.value.School_Year,
      votes_list: votes
    }
  });

  if (!data.value?.Record || error.value) {
    $toast.fire({
      title: data.value?.Status || 'Can not submit votes',
      icon: 'error'
    })
    isLoading.value = false;
    return;
  }

  router.replace('/home');

  $swal.fire({
    title: data.value.Status || 'Successfully submitted votes',
    icon: 'success'
  })

  isLoading.value = false;

}

const router = useRouter();

function isCandidateSelected(position_index, candidate) {
  
  // get position index
  const candidateIndex = positionsWithCandidates.value[position_index].selectedCandidates.findIndex(selected => selected.candidate_id === candidate.Candidate_ID);
  
  // console.log(candidateIndex !== -1);
  return candidateIndex !== -1;

}

const isPreviewMode = ref(false);

const selectedCandidatesByPosition = computed(() => {
  return positionsWithCandidates.value.map(position => ({
    position: position.position,
    candidates: position.selectedCandidates.map(selected => position.candidates.find(candidate => candidate.Candidate_ID === selected.candidate_id)),
    max_votes: position.max_votes,
    selectedCandidates: position.selectedCandidates
  }))
})


const displayedCandidates = computed(() => {
  return isPreviewMode.value ? selectedCandidatesByPosition.value : positionsWithCandidates.value;
});

watch(isPreviewMode, (newValue) => {
  if (!newValue) {
    isTrueInfoChecked.value = false;
  }
})


</script>
