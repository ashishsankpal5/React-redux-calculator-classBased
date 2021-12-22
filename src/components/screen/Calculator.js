import React, { Component } from "react";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import {
  buttonClick,
  clearClick,
  spaceClick,
  answerClick,
} from "../actions/CalAction";
import { connect } from "react-redux";

import { Unique_key } from "../reducers";

const mapStateToProps = (props) => {
  return {
    btnRedu: props.buttonReducer,
    ansBtn: props.AnswerReducer,
    spcBtn: props.SpaceReducer,
    remBtn: props.RemoveReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ButtonClick: () => dispatch(buttonClick()),
    ClearClick: () => dispatch(clearClick()),
    SpaceClick: () => dispatch(spaceClick()),
    AnswerClick: () => dispatch(answerClick()),
    showRes: () => dispatch(Unique_key()),
  };
};
class Calculator extends Component {
  render() {
    return (
      <div>
        <div>
          <Flex justifyContent="center">
            <Box
              border={"1px solid black"}
              p="6"
              w="80"
              h="80"
              borderRadius="12"
              bgColor="gray.600"
            >
              <h4 style={{ textAlign: "center", color: "white" }}>
                {" "}
                React-Redux Calculator
              </h4>
              <Input
                type="text"
                value={
                  this.props.showRes.ans.length === 0
                    ? this.props.showRes.number
                    : this.props.showRes.ans
                }
                // value="12"
                placeholder="Put load on your brain..."
                bgColor="white"
              ></Input>
              <Flex justifyContent="center" mt="4">
                <Box>
                  <Box>
                    <Button
                      onClick={() => this.props.ClearClick()}
                      style={{ border: "1px solid black" }}
                    >
                      AC
                    </Button>
                    <Button
                      onClick={() => this.props.SpaceClick()}
                      style={{ border: "1px solid black" }}
                    >
                      C
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick("/")}
                      style={{ border: "1px solid black" }}
                    >
                      /
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick("+")}
                      style={{ border: "1px solid black" }}
                    >
                      +
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => this.props.ButtonClick(9)}
                      style={{ border: "1px solid black", width: "55px" }}
                    >
                      9
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(8)}
                      style={{ border: "1px solid black" }}
                    >
                      8
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(7)}
                      style={{ border: "1px solid black", width: "42px" }}
                    >
                      7
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick()}
                      style={{ border: "1px solid black", width: "43px" }}
                    ></Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => this.props.ButtonClick(4)}
                      style={{ border: "1px solid black", width: "55px" }}
                    >
                      4
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(5)}
                      style={{ border: "1px solid black" }}
                    >
                      5
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(6)}
                      style={{ border: "1px solid black", width: "41px" }}
                    >
                      6
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick("-")}
                      style={{ border: "1px solid black", width: "44px" }}
                    >
                      -
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => this.props.ButtonClick(1)}
                      style={{ border: "1px solid black", width: "55px" }}
                    >
                      1
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(2)}
                      style={{ border: "1px solid black" }}
                    >
                      2
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(3)}
                      style={{ border: "1px solid black", width: "41px" }}
                    >
                      3
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick("*")}
                      style={{ border: "1px solid black", width: "45px" }}
                    >
                      *
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={() => this.props.ButtonClick(".")}
                      style={{ border: "1px solid black", width: "55px" }}
                    >
                      .
                    </Button>
                    <Button
                      onClick={() => this.props.ButtonClick(0)}
                      style={{ border: "1px solid black" }}
                    >
                      0
                    </Button>
                    {/* <Button style={{ border: "1px solid black" }}>1</Button> */}
                    <Button
                      onClick={() => this.props.AnswerClick()}
                      style={{ border: "1px solid black", width: "85px" }}
                    >
                      =
                    </Button>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </div>
      </div>
    );
  }
}
export default connect(mapDispatchToProps, mapStateToProps)(Calculator);
