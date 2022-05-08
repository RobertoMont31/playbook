const MissionCommander = require('./../app/missioncomander');

describe("Unit Test for Mission Commander Class", () => {
  test('1) Create a mission commander object1', () => {
    const myMissionCommander = new MissionCommander ("Woopa") 
    expect(myMissionCommander.name).toBe("Woopa");
  });
})
