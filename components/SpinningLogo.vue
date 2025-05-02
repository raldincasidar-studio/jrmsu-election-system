<template lang="pug">
.image-logo
        .overlay
            .context
                img(src="~/assets/img/jrmsu-log.png")
                h2  Powered by #[a(href="https://raldin-casidar.netlify.app/") CCS-Creatives Commitee]
            
            .footer 
                p Copyright &copy; 2023 - #[a(href="https://raldin-casidar.netlify.app/") CCS-Creatives Commitee]
</template>

<style lang="scss" scoped>
.image-logo {
  width: 50%;
  padding: 15px;
  text-align: center;
  background: url("~/assets/img/bg.png") no-repeat center/cover;
  position: relative;
  max-height: 100vh;
  position: sticky;
  top: 0;

  .overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(#1d1a71a9, #1d1a71d8);
    content: "";
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .context {
      img {
        max-width: 200px;
        margin: 20px;
        animation: flip 5s infinite linear;
        filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.19))
          drop-shadow(0 6px 6px rgba(0, 0, 0, 0.23));

        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      }

      h2 {
        color: white;
        font-size: 18px;
        a {
          color: #f9c301;
          text-decoration: none;
          border-bottom: 2px solid #f9c30162;
          cursor: pointer;
          transition: all 0.3s ease-in-out;

          &:hover {
            border-bottom: 2px solid #f9c301;
          }
        }
      }
    }

    .footer {
      position: absolute;
      bottom: 20px;
      color: white;
      font-size: 14px;

      p {
        color: white;
      }
      a {
        color: #f9c301;
        text-decoration: none;
        border-bottom: 2px solid #f9c30162;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          border-bottom: 2px solid #f9c301;
        }
      }
    }
  }
}
</style>
