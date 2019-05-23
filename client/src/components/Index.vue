<template>
  <div>
    <header>
      <div class="details">
        <h1>Transaction Mode</h1>
        <span>Send Money From:</span>
        <button @click="fromMTN">MTN to Orange</button>
        <button @click="fromORANGE">Orange to MTN</button>
      </div>
      <form action>
        <div class="one">
          <label for="senderNum">
            Sender Number
            <span v-bind:class="{ mtn: isMTN, 'orange': isOrange }">{{sender}}</span>
          </label>
          <input type="text" name="senderNum" id="senderNum">
        </div>
        <div class="two">
          <label for="amt">Amount</label>
          <input type="text" name="amt" id="amt">
        </div>
        <div class="three">
          <label for="recNum">
            Reciever Number
            <span
              v-bind:class="{ mtn_receiver: isMTN, 'orange_receiver': isOrange }"
            >{{reciever}}</span>
          </label>
          <input type="text" name="recNum" id="recNum">
        </div>
        <input type="submit" value="Send">
      </form>
    </header>
    <section class="about">
      <div class="title">
        <h1>How it Works</h1>
        <hr>
      </div>
      <div class="content">
        <div class="content-item left">
          <div class="content-img">
            <img src="../assets/index/digital_psdg_5_pr.jpg" alt="image">
          </div>
          <article>
            <h1>Pick a Mode</h1>
            <p>
              To get started, you need to pick a transaction mode, this will enable us to quickly indentify if you are sending money using an
              <span
                style="color:var(--yellow_color);font-size: 26px;font-weight: bolder;"
              >MTN</span> number or
              <span
                style="color:var(--orange_color);font-size: 26px;font-weight: bolder;"
              >Orange</span> number.
            </p>
          </article>
        </div>
        <div class="content-item right">
          <article>
            <h1>Fill The Form</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio neque aliquid, esse, pariatur quam et error minus incidunt vitae ea quibusdam a ratione sapiente voluptas repudiandae iure. Quos, aliquam enim!.
              <br>
              <br>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel eligendi saepe iusto eveniet est doloribus assumenda dolore laudantium ad pariatur ipsa hic, dicta laborum rerum magni consequatur fuga dolorem quam?
            </p>
          </article>
          <div class="content-img">
            <img src="../assets/index/digital_psdg_5_pr.jpg" alt="image">
          </div>
        </div>
        <div class="content-item left">
          <div class="content-img">
            <img src="../assets/index/digital_psdg_5_pr.jpg" alt="image">
          </div>

          <article>
            <h1>Hit the Send Button</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi repellendus veritatis praesentium sint in illo temporibus alias et? Maiores ad voluptas earum ipsa veniam similique ut iste aperiam ab natus!.
              <br>
              <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iusto facilis amet placeat aspernatur ex! Maxime natus, consequuntur iste esse illo impedit, consectetur explicabo laboriosam molestias perspiciatis voluptatum voluptate repudiandae.
            </p>
          </article>
        </div>
      </div>
    </section>
    <div class="payment-method">
      <div class="title">
        <h1>CAMEROONIAN PAYMENT METHODS BY MARKET SHARE</h1>
      </div>
      <div class="payment-card">
        <ul>
          <li>
            <h1>16%</h1>
            <span>CREDIT CARDS</span>
          </li>
          <li>
            <h1>33%</h1>
            <span>PREPAID CARDS</span>
          </li>
          <li>
            <h1>16%</h1>
            <span>MOBILES</span>
          </li>
          <li>
            <h1>16%</h1>
            <span>BANK TRANSFER</span>
          </li>
          <li>
            <h1>16%</h1>
            <span>E-WALLETS</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   msg: String
  // },
  data() {
    return {
      isMTN: false,
      isOrange: false,
      sender: null,
      reciever: null
    };
  },
  methods: {
    fromMTN() {
      this.sender = "(MTN Number)";
      this.reciever = "(Orange Number)";
      this.isMTN = true;
      this.isOrange = false;
    },
    fromORANGE() {
      this.sender = "(Orange Number)";
      this.reciever = "(MTN Number)";
      this.isMTN = false;
      this.isOrange = true;
    }
  },
  mounted() {
    this.fromMTN();
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  input[type="submit"] {
    padding: 10px 20px;
    width: fit-content;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  div {
    display: grid;
    grid-template-rows: auto 1fr;
    margin: 10px 0;
    input {
      padding: 10px;
      outline: none;
      border-radius: 5px;
      border: none;
    }
    label {
      color: var(--white);
      font-weight: bolder;
      span {
        display: inline;
      }
      .orange_receiver,
      .mtn {
        margin-left: 20px;
        color: var(--yellow_color);
      }

      .mtn_receiver,
      .orange {
        margin-left: 20px;
        color: var(--orange_color);
      }
    }
  }
}
header {
  // display: grid;
  padding: 30px 0;
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  height: 550px;
  background: url("../assets/index/cam-bg.jpg") center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  span {
    display: block;
    color: var(--white);
  }
  h1 {
    color: var(--white);
  }
  button {
    &:last-child {
      background-color: var(--orange_color);
      margin: 20px;
    }
    outline: none;
    border: none;
    cursor: pointer;
    background-color: var(--yellow_color);
    padding: 10px;
    // display: block;
    width: fit-content;
    // transition: background-color 0.5ms ease-in-out;
    &:hover {
      background-color: var(--base_color);
      color: var(--white);
    }
  }
}

.about {
  width: 70%;
  margin: 0 auto;
  counter-reset: counter;
  article {
    &::before {
      content: counter(counter);
      counter-increment: counter;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      display: grid;
      border: 1px solid var(--base_color);
      place-items: center;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    display: grid;
    place-items: center;
    height: fit-content;
    h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }
  .title {
    margin-bottom: 20px;
    h1 {
      font-size: 2rem;
      margin-top: 40px;
      margin-bottom: 10px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .left {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    column-gap: 10px;
    border-bottom: 1px solid var(--red_color);
  }
  .right {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    column-gap: 10px;
    border-bottom: 1px solid var(--red_color);
  }
  .content-img {
    // height: 150px;
    object-fit: cover;
  }
}
.payment-method {
  background-color: var(--base_color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 250px;
  h1 {
    font-size: 16px;
    color: var(--white);
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    color: var(--white);
    li {
      border-right: 1px solid var(--white);
      &:first-child {
        border-left: 1px solid var(--white);
      }
      padding: 10px;
      flex-basis: 200px;
      display: grid;
      grid-template-rows: auto 1fr;
      align-items: center;
      justify-items: center;
      row-gap: 10px;
      h1 {
        font-size: 16px;
        height: 80px;
        width: 80px;
        display: grid;
        align-items: center;
        color: var(--white);
        font-weight: lighter;
        border-radius: 50%;
        border: 1px solid var(--white);
      }
    }
  }
}
</style>
