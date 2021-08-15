<template>
    <div class="contactForm">
        <p class="title">CONTACT FORM</p>
        <div class="form">
            <div class="textBox wrap">
                <p>姓名</p>
                <div class="wrap inputWidth">
                    <input class="nameWidth" type="text">
                    <div class="chooseBox">
                        <input id="sex01" type="radio" checked  name='sex'>
                        <label for="sex01" class="chooseStyle">先生</label>
                        <input id="sex02" type="radio"  name='sex'>
                        <label for="sex02" class="chooseStyle">小姐</label>
                    </div>
                </div> 
            </div>
            <div class="textBox wrap">
                <p>電話</p>
                <input type="text"> 
            </div>
            <div class="textBox wrap">
                <p>信箱</p>
                <input type="text">
            </div>
            <div class="textBox wrap">
                <p>留言內容</p>
                <textarea></textarea>
            </div>
            <div class="wrap flex-end">
                <div class="submitBtn">送出</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrap {
    display: flex;
    justify-content: space-between;
}

.flex-end {
    justify-content: flex-end;
}

.nameWidth {
    width: calc(100% - 130px);
}

.chooseStyle {
    display: inline-block;
    width: 60px;
    height: 40px;
    line-height: 38px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 5px;
    border: 2px solid #ccc;
    border-radius: 5px;
}

input {
    width: 80%;
    padding: 10px 25px;
    border: none;
    -webkit-appearance: none;
    background: #efefef;
    border-radius: 8px;
    font-size: 16px;
    letter-spacing: 3px;
}

.inputWidth {
    width:80%
}

textarea {
    width: 80%;
    height: 120px;
    padding: 25px 25px;
    border: none;
    -webkit-appearance: none;
    background: #efefef;
    border-radius: 8px;
    font-size: 16px;
    letter-spacing: 3px;
}

.textBox {
    margin: 40px 0px;
}

.textBox p {
    display: block;
    line-height: 37px;
    width: 65px;
    text-align: left;
}

.chooseBox input:checked + label {
    background-color: #6fc560;
    border: 2px solid #6fc560;
    color: #fff;
}

.chooseBox input {
    display: none;
}

input:focus {
    border-color: #111;
}

input:focus + p {
    color: #111;
    font-weight: bold;
}

.submitBtn {
    width: 100%;
    max-width: 360px;
    cursor: pointer;
    text-align: center;
    background-color: #6fc560;
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    padding: 0px 20px;
    margin: 30px 0 50px 0;
    line-height: 52px;
    height: 50px;
    transition: .3s;
}

.submitBtn::before {
    position: absolute;
    content: '';
    top: calc(50% - 6px);
    right: 20px;
    width: 8px;
    height: 8px;
    border: solid #fff;
    border-width: 0 3px 3px 0;
    transform: rotate(-45deg);
}

.submitBtn:hover {
    background-color: #6fc560;
    opacity: 0.9;
}

.contactForm {
    max-width: 1280px;
    width: 90%;
    padding: 80px;
    padding-bottom: 30px;
    margin: auto;
    background-color: #fff;
}

.title {
    width: 100%;
    font-size: 21px;
    line-height: 30px;
    letter-spacing: 3px;
    margin-bottom: 50px;
}

.form {
    padding: 3px 15px;
}

@media (max-width: 720px) {
    .contactForm {
        padding: 80px 40px;
    }

    .submitBtn {
        max-width: none;
    }
}

@media (max-width: 560px) {
    .contactForm {
        padding: 50px 5px;
    }

    .title {
        margin-bottom: 20px;
        letter-spacing: 1px;
    }
}

@media (max-width: 450px) {
    .wrap {
        flex-direction: column;
    }

    input, textarea {
        width: 100%;
    }

    .inputWidth {
        width: 100%;
        flex-direction: row;
    }

    .textBox {
        margin: 20px 0px;
    }
}

</style>
