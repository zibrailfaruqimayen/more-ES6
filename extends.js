class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedBack() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "web course instructor";
  team = "web team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "web course instructor";
  team = "web team";
  tech;

  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  DevelopFeature(feature) {
    console.log(`please develop the  ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "job placement commandos";
  team = "job placement";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`please develop the  ${feature}`);
  }
  prepareStudent(version) {
    console.log(`please release the version ${version}`);
  }
}

const alia = new Developer("alia", "dhaka", "react");
console.log(alia);
