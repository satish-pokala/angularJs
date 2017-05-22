

import {EmpInterface} from "./emp-interface";
import {EmpInfo} from "./emp-info";

export class EmpClass implements EmpInterface{

  getEmpInfo():EmpInfo{

    return {
      "age":31
    };

  }

}
