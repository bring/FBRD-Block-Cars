pragma solidity ^0.5.12;
      contract CarServices {

          struct Car{
        uint256 inspectionDate;
        uint256 dueDate;
        string approvalId;
          }

        mapping(string => Car) cars;

        event NewCarRegistered(string registrationNum,uint256 dueDate);
        event ApprovalRegistered(string registrationNum,uint256 inspectionDate,string approvalId);

        function registerNewCar(string memory _registrationNum,uint256 _salesDate ) public {
            cars[_registrationNum] = Car(0,_salesDate,"");
          //to calculate due date on the basis of sales date
          emit NewCarRegistered(_registrationNum,_salesDate);
        }

        function search(string memory _regNum) public view returns (
            uint256 outInspectionDate,
            uint256 outDueDate,
            string memory outApprovalId){
                Car storage outCar = cars[_regNum];
            return (outCar.inspectionDate,outCar.dueDate,outCar.approvalId);
        }

        function approve(string memory _regNum, uint256 _inspectionDate , string memory _approvalId) public {
            Car storage outCar = cars[_regNum];
            outCar.inspectionDate=_inspectionDate;
            outCar.approvalId=_approvalId;
            emit ApprovalRegistered(_regNum,_inspectionDate,_approvalId);
        }
      }
