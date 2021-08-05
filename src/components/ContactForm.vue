<template>
    <div class="contactForm">
        <p class="textColumn">CONTACT FORM -</p>
        <div class="form">
            <div class="text">
                <div class="name">
                    <div class="left inputBox">
                        <input class="nameInput" type="text">
                        <p>姓名 \ </p> 
                    </div>
                    <div class="right chooseBox">
                        <input id="sex01" type="radio" checked  name='sex'>
                        <label for="sex01" class="chooseStyle">先生</label>
                        <input id="sex02" type="radio"  name='sex'>
                        <label for="sex02" class="chooseStyle">小姐</label>
                    </div>
                    <div class="clearBox"></div>
                </div>
            </div>
            <div class="text">
                <input class="nameInput" type="text" placeholder=""> 
                <p>電話 \ </p>
            </div>
            <div class="text">
                <input class="nameInput" type="text">
                <p>信箱 \ </p>
            </div>
            <div>
                <textarea placeholder="留言內容\"></textarea>
            </div>
            <div class="submitBtn">送出</div>
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

.left {
    float: left;
}

.right {
    float: right;
}

.clearBox {
    clear: both;
}

.chooseBox {
    width: 100px
}

.chooseBox input{
    display: none;
}

.chooseStyle {
    cursor: pointer;
    padding: 5px;
    margin-left: 5px;
    border: 1px solid #ccc;
}

.nameInput {
    display: block;
    appearance: none;
    width: 100%;
    padding: 5px 5px 5px 55px;
    border: 0;
    border-bottom: 2px solid #999;
    outline: none;
    font-size: 16px;
    background-color: #fff;
    color: #000;
    background-color: rgba(255, 255, 255, 0);
}

textarea {
    width: 100%;
    height: 90px;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #999;
}

.text {
    margin: 30px 0px 40px 0px;
    position: relative;
}

.text p {
    position: absolute;
    bottom: 6px;
    left: 5px;
}

.chooseBox input:checked + label {
    background-color: #8bc672;
    color: #fff;
}

.inputBox{
    width: calc(100% - 100px);
}

.nameInput:focus {
    border-color: #111;
}

.nameInput:focus + p {
    color: #111;
    font-weight: bold;
}

.submitBtn {
    cursor: pointer;
    text-align: center;
    padding: 10px 20px;
    background-color: #8bc672;
    color: #fff;
    margin-top: 30px;
    transition: .3s;
    font-weight: bold;
    position: relative;
    border: 2px solid #8bc672;
}

.submitBtn:hover {
    background-color: #8bc672;
    opacity: 0.9;
}

.contactForm {
    margin: 0px 50px;
    width: 400px;
    padding: 0px 5px;
    text-align: left;
    display: flex;
}

.textColumn {
    height: 280px;
    line-height: 30px;
    writing-mode: vertical-lr;
    letter-spacing: 3px;
    background-color: #8bc672;
    color: #fff;
    padding: 8px 0px;
    margin-right: 10px;
}

.form {
    width: 100%;
    padding: 3px 15px;
}

@media (max-width: 900px) {
    .contactForm {
        margin: 0px;
    }
}

@media (max-width: 720px) {
    .contactForm {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }

    .form {
        max-width: 350px;
        padding: 20px 30px;
    }

    .textColumn {
        width: 100%;
        height: 100%;
        text-align: center;
        writing-mode:horizontal-tb;
        margin-right: 0px;
    }

    .nameInput {
        border-bottom: 1px solid #999;
    }

    textarea {
        border: 1px solid #999;
    }
}

</style>
