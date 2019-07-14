import { IEmployeList } from "./employe-models";

export const defaultEmployeList: IEmployeList[] = [
    {
      eid: 101,
      eName: "Mark",
      dept: "Automation",
      salary: 2000,
      joinDate: new Date(),
      description: "Automation testing"
    },
    {
      eid: 102,
      eName: "Andrue",
      dept: "Manual",
      salary: 5000,
      joinDate: new Date(),
      description: "Automation testing"
    },
    {
      eid: 103,
      eName: "Rohan",
      dept: "Manual",
      salary: 10000,
      joinDate: new Date(),
      description: "Automation testing"
    }
];
export const getEmployesList = (searchText: string | number) => {
    const filteredItem = defaultEmployeList.filter((item) => {
      return String(item.eName).toLowerCase().indexOf(String(searchText)) !== -1 || Number(item.salary) >= Number(searchText);
    })
    return filteredItem;
}
export const getEmployeDetails = (id: number, employeList: IEmployeList[]) => {
    const filterDetails = employeList.filter((item) => {
        return item.eid === id;
    });
    return filterDetails[0];
}
