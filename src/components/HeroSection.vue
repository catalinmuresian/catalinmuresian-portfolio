<template>
  <div class="hero-section">
    <div class="top">
      <div class="text">
        <div class="top-text">
          <h1 class="hi">Hi</h1>
          <h1 class="name">I’m Catalin M.</h1>
          <div class="role">
            <hr>
            <span>frontend developer</span>
          </div>
          <p class="desc">Crafting pixel-perfect, user-centric web experiences with passion and proficiency.</p>
        </div>
        <MainButton
          class="button-tablet button-hero"
          :name="'Contact Me'"
          @handle-button="handleButton"
        />
      </div>
      <div class="portrait-image image-hero">
        <img src="../assets/cm-main-image.png" alt="">
      </div>
    </div>
    <MainButton
      class="button-mobile button-hero"
      :name="'Contact Me'"
      @handle-button="handleButton"
    />
  </div>

</template>

<script setup>

import MainButton from '../components/MainButton'

function handleButton () {
    const element = document.getElementById('contact-section');
    element.scrollIntoView({ behavior: 'instant' });
}
</script>

<style lang="scss">
.hero-section {
  margin-top: 20px;
  .hi, .name, .role, .desc {
    transform: translateX(-450px);
    opacity: 0;
  }
  .button-hero {
    transform: translateY(50px);
    opacity: 0;
  }
  .image-hero {
    opacity: 0;
  }
  .button-mobile {
    display: block;
  }
  .top {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    .text {
      .top-text {
        .role {
          gap: 15px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 10px;

          hr {
            margin: 0;
            border: 2px solid $yellow;
            width: 72px;
          }

          > span {
            color: $yellow;
            font-weight: 700;
          }
        }
        p {
          max-width: 223px;
          color: #ffffff;
          mix-blend-mode: exclusion;
          margin-bottom: 40px;
        }
      }
      .button-tablet {
        display: none;
      }
    }
    .portrait-image {
      max-width: 190px;
      position: absolute;
      bottom: -16px;
      right: -16px;

      img {
        width: 100%;
      }
    }
  }
  .main-button {
    width: 180px;
    margin: 0 auto;
    display: flex;
  }
  @media only screen and (min-width: 400px) {
    .top {
      .portrait-image {
        left: 50%;
      }
    }

  }
  @media only screen and (min-width: 768px) {
    margin-top: 60px;
    .hi, .name, .role, .button-hero, .desc {
      transform: translateX(-700px);
    }
    .main-button {
      margin: unset;
    }
    .button-mobile {
      display: none;
    }
    .top {
      .portrait-image {
        position: relative;
        left: 0;
        max-width: 243px;
      }

      .text {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        .top-text {
          .role {
            hr {
              width: 290px;
            }
          }
          p {
            max-width: 340px;
            margin: 0;
          }
        }
        .button-tablet {
          display: block;
        }
      }
    }

  }
  @media only screen and (min-width: 850px) {
    .top {
      .portrait-image {
        max-width: 300px;
        left: -5%;

      }
    }
  }
  @media only screen and (min-width: 1440px) {
    .hi, .name, .role, .button-hero, .desc {
      transform: translateX(-900px);
    }
    .top {
      .text {
        .top-text {
          .role {
            hr {
              width: 325px;
            }
            span {
              font-size: 16px;
            }
          }
          p {
            max-width: 440px;
            line-height: 30px;
          }
        }
      }
      .portrait-image {
        left: -15%;
        max-width: 380px;
      }
    }

  }
}


</style>
