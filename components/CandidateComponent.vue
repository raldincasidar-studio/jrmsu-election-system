<template lang="pug">
.candidates-container( :class="{active: selected}")
    img(:src="candidate.Candidate_Photo ? `data:image/png;base64,${candidate.Candidate_Photo}` : '/avatar.png'" :alt="candidate.Candidate_Name")
    
    .info
        h5 {{ candidate.Position }} 
          span(v-if="votecount == -1" style="text-transform: uppercase") ({{ candidate.Candidate_Slate }})
        h2 {{ candidate.Candidate_Name }}

        p.vote-count(v-if="votecount != -1") {{ votecount }} votes
        .bar-counter(v-if="votecount != -1")
            .fill(:style="{ width: (votecount/returnees) * 100 + '%' }")


    svg(v-if="votecount == -1 && candidate != 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6")
        path(stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z")
    svg(v-if="votecount == -1 && candidate == 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6")
        path(fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd")

</template>

<style lang="scss" scoped>
 .candidates-container {
    border-radius: 10px;
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

    &:active {
        transform: scale(0.95);
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
        color: #1d1a71;
      }

      .vote-count {
        margin: 0;
        margin-top: 20px;
        font-size: 14px;
      }

      .bar-counter {
        width: 100%;
        height: 15px;
        background-color: #00000025;
        // border-radius: 10px;
        margin: 10px 0;

        .fill {
            width: 75%;
            height: 100%;
            background-color: #1d1a71;
            // border-radius: 10px;
        }
      }
    }

    &.active {
      box-shadow: 0 0 10px #f9c301;
      border-color: #f9c301;

      svg {
        color: #f9c301;
      }
    }
  }
</style>

<script setup>
const props = defineProps({
  candidate: {
    type: Object,
    required: true
  },
  selected: {
    type: Boolean,
    required: true
  },
  votecount: {
    type: Number,
    required: false,
    default: -1
  },
  returnees: {
    type: Number,
    required: false,
    default: -1
  }
});

</script>