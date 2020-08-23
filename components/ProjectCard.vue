<template>
  <div class="ProjectCard">
    <div class="card">
      <div class="text">
        <div class="header">
          <div class="title">{{project.name}}</div>
          <div class="flex-grow"></div>
          <div class="icon">
            <img :src="project.icon" />
          </div>
        </div>

        <p class="description">{{project.desc}}</p>

        <div :class="'status-' + project.status.color" class="status">{{project.status.text}}</div>

        <div class="actions">
          <div class="action"></div>
          <div class="action">
            <a :href="project.githubLink" target="_blank">
              <fa-icon class="icon" :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
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
      githubLink: String,
    },
  },
};
</script>


<style>
.col {
  padding: 0;
}
.ProjectCard {
  width: 450px;
  height: fit-content;
  border-color: white;
}
.card {
  padding: 10px;
  margin: 20px;
  border-radius: 15px !important;
  color: white !important;
  border: none;
  position: relative;
  transition: 0.2s;
  background: #63535b;
}

.card:hover {
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.09);
  transform: scale(0.9);
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
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: -10px;
  left: -10px;
  padding: 5px;
  border-radius: 10px;
}

.status-red {
  background: #fa003f !important;
}

.status-green {
  background: #00916e !important;
}

.status-yellow {
  background: #ffd20a !important;
}

.text .description {
  font-size: 14px;
  line-height: 16px;
  text-align: center;
}

.text .title {
  font-size: 30px;
  font-weight: bolder;
}
col-3 {
  padding: 0;
}

.actions {
  height: 40px;
  border-radius: 10px;
  display: flex;
  margin-top: 10px;
}

.actions .action {
  height: 40px;
  background: #3a2e39;
  border-radius: 10px;
}

.actions .action:nth-child(1) {
  flex-grow: 1;
  width: 40px;
  padding: 5px;
}

.actions .action:nth-child(2) {
  width: 40px;
  padding: 8px;
  margin-left: 10px;
}

.action .icon {
  width: 100%;
  height: 100%;
  color: white;
}

.flex-grow {
  flex-grow: 1;
}

.header {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

