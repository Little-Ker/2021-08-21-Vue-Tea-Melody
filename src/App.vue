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
