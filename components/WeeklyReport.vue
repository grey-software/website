<template>
  <div class="d-flex container mt-5 report-card py-4 pl-4">
    <h1 class="report-section-header mb-4">{{ repoName() }}</h1>

    <div class="d-flex pr-section">
      <div class="d-flex detail-box">
        <div class="detail-icon-value-container">
          <img
            src="../assets/icons/new-issues.svg"
            class="detail-icon mb-2 mr-1"
          />
          <h4 class="detail-value mb-1">{{ report.newIssues }}</h4>
        </div>
        <p>New Issues</p>
      </div>

      <div class="d-flex detail-box">
        <div class="detail-icon-value-container">
          <img
            src="../assets/icons/closed-issues.svg"
            class="detail-icon mb-2 mr-1"
          />
          <h4 class="detail-value mb-1">{{ report.closedIssues }}</h4>
        </div>
        <p>Closed Issues</p>
      </div>

      <div class="d-flex detail-box">
        <div class="detail-icon-value-container">
          <img
            src="../assets/icons/merge-open-pr.svg"
            class="detail-icon mb-2 mr-1"
          />
          <h4 class="detail-value mb-1">{{ report.openedPRs }}</h4>
        </div>
        <p>Open Pull Requests</p>
      </div>

      <div class="d-flex detail-box">
        <div class="detail-icon-value-container">
          <img
            src="../assets/icons/merge-pr.svg"
            class="detail-icon mb-2 mr-1"
          />
          <h4 class="detail-value mb-1">{{ report.mergedPRs }}</h4>
        </div>
        <p>Merged Pull Requests</p>
      </div>
    </div>

    <!-- <div class="d-flex branches-section mt-4">
      <h1 class="report-section-header mb-4">Master Branch</h1>

      <div class="d-flex branches-info">

        <div class="d-flex detail-box">
          <div class="detail-icon-value-container">
            <img
              src="../assets/icons/new-issues.svg"
              class="detail-icon mb-2 mr-1"
            />
            <h4 class="detail-value mb-1">{{authors}}</h4>
          </div>
          <p>Authors</p>
        </div>

        <div class="d-flex detail-box">
          <div class="detail-icon-value-container">
            <img
              src="../assets/icons/new-issues.svg"
              class="detail-icon mb-2 mr-1"
            />
            <h4 class="detail-value mb-1">{{commitsToMaster}}</h4>
          </div>
          <p>Authors</p>
        </div>

        <div class="d-flex detail-box">
          <div class="detail-icon-value-container">
            <img
              src="../assets/icons/new-issues.svg"
              class="detail-icon mb-2 mr-1"
            />
            <h4 class="detail-value mb-1">{{totalAdditions}}</h4>
          </div>
          <p>Additions</p>
        </div>

        <div class="d-flex detail-box">
          <div class="detail-icon-value-container">
            <img
              src="../assets/icons/new-issues.svg"
              class="detail-icon mb-2 mr-1"
            />
            <h4 class="detail-value mb-1">{{deletions}}</h4>
          </div>
          <p>Deletions</p>
        </div>

      </div>

    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    report: {
      mergedPRs: {
        type: String,
        default: '0',
      },

      openedPRs: {
        type: String,
        default: '0',
      },

      newIssues: {
        type: String,
        default: '0',
      },

      closedIssues: {
        type: String,
        default: '0',
      },

      commitsToMaster: {
        type: String,
        default: '0',
      },

      totalAdditions: {
        type: String,
        default: '0',
      },

      deletions: {
        type: String,
        default: '0',
      },

      authors: {
        type: String,
        default: '0',
      },

      startDate: {
        type: String,
        default: 'August 22, 2020',
      },

      endDate: {
        type: String,
        default: 'August 29, 2020',
      },
    },
  },
  methods: {
    repoName() {
      console.log(this.report)
      const names = this.report.repo.split('-').join(' ')
      return names
    },
  },
}
</script>

<style scoped>
.detail-icon-value-container {
  display: flex;
  align-items: center;
}

.detail-value {
  font-size: 28px;
  margin-left: 8px;
}

.detail-icon {
  height: 36px;
}

.report-card {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.container {
  flex-direction: column;
  border-color: grey;
}

.report-section-header {
  font-size: 28px;
  font-weight: 600;
  text-transform: capitalize;
}

.table-date {
  color: black;
  flex: 2;
  font-style: italic;
}

.detail-box {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.img-container {
  flex-direction: row;
}

.branches-section {
  flex: 3;
  flex-direction: column;
}

.branches-title {
  flex-direction: row;
}

.title {
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
