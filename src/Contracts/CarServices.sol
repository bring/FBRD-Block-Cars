pragma solidity ^0.5.12;
      contract CarServices {

        uint256 inspectionDate;
        uint256 dueDate;
        string approvalId;
        string registrationNum;

        event NewCarRegistered(string registrationNum,uint256 dueDate);
        event ApprovalRegistered(string registrationNum,uint256 inspectionDate,string approvalId);

        function registerNewCar(string memory _registrationNum,uint256 _salesDate ) public {
            registrationNum=_registrationNum;
            dueDate=_salesDate;
          //to calculate due date on the basis of sales date
          emit NewCarRegistered(_registrationNum,_salesDate);
        }

        function search(string memory _regNum) public view returns (
            uint256 outInspectionDate,
            uint256 outDueDate,
            string memory outApprovalId){
            return (inspectionDate,dueDate,approvalId);
        }

        function approve(string memory _regNum, uint256 _inspectionDate , string memory _approvalId) public {
            inspectionDate=_inspectionDate;
            approvalId=_approvalId;
            emit ApprovalRegistered(_regNum,_inspectionDate,_approvalId);
        }

        function getAllOverDue()public view returns(
            uint256 outInspectionDate,
            uint256 outDueDate,
            string memory outApprovalId,
            string memory outRegistrationNum){
            return (inspectionDate,dueDate,approvalId,registrationNum);
        }
      }