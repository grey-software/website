<template>
  <div class="ProjectCard">
    <div class="card">
      <div class="text">
        <b-col>
          <b-row>
            <b-col cols="3">
              <img :src="project.icon" />
            </b-col>
            <b-col cols="9">
              <div class="title">{{project.name}}</div>
            </b-col>
          </b-row>
        </b-col>

        <p class="description">{{project.desc}}</p>

        <div class="status">{{project.status}}</div>

        <b-link :href="project.githubLink" target="_blank">
          <fa-icon class="mr-3 icon" :icon="['fab', 'github']" />
        </b-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      name: String,
      desc: String,
      status: String,
      icon: String,
      githubLink: String
    }
  }
};
</script>


<style>
* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}
.col {
  padding: 0;
}
.ProjectCard {
  width: 450px;
  height: 650px;
  border-color: white;
}
.icon {
  opacity: 0;
}
.card {
  padding: 40px 40px;
}

.card:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
  border: none;
}

.card:hover .icon {
  opacity: 100%;
  transition: opacity 0.4s ease;
  color: black;
}

.text img {
  width: 50px;
  height: 50px;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}

/* .text {
  padding: 40px 40px;
} */
.text .status {
  letter-spacing: 2px;
  font-size: 12px;
  font-weight: bold;
  color: #b29a66;
}

.text .description {
  font-size: 14px;
  line-height: 16px;
}

.text .title {
  font-size: 40px;
  font-weight: bolder;
  transform: translate(-30px, 0px);
}
col-3 {
  padding: 0;
}
</style>

