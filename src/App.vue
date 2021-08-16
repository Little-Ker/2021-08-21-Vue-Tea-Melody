<template>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* 刪除按鈕 */
.deleteBtn:hover img{
    background-color: #999;
}

.deleteBtn:hover .deleteHover{
    opacity: 0.8;
}

.deleteBtn img {
    cursor: pointer;
    position: absolute;
    width: 28px;
    height: 28px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid #ccc;
}

.deleteHover {
    position: absolute;
    opacity: 0;
}

/* 進出場動畫 */
@keyframes bounce-in {
  0% {
      opacity: 0;
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
      opacity: 1;
    transform: scale(1);
  }
}

@keyframes flyDown-in {
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #888; 
} */


/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
