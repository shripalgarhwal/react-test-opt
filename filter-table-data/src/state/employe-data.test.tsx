
import { getEmployesList, defaultEmployeList, getEmployeDetails } from '.';

describe("utility methods test", () => {

    it('test for getEmployesList', () => {
        const filteredList = getEmployesList("");
        expect(filteredList.length).toEqual(3);
    });
    it('test for getEmployeDetails', () => {
        const testData = {
            eid: 101,
            eName: "Mark",
            dept: "Automation",
            salary: 2000,
            joinDate: new Date(),
            description: "Automation testing"
          }
        const data = getEmployeDetails(101, defaultEmployeList);
        expect(data.eid).toEqual(testData.eid);
    });
})