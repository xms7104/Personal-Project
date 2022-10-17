import React from "react";

import { CheckIcon } from "@primer/octicons-react";

import UserImg from "../src/img/userImg.png";

function IssueDetailPage() {
  return (
    <>
      <div>
        <div>
          <p>IssueTitle #30</p>
          <div>
            <button>open</button>
            <a href="#">Xie-Ms</a>
            <p>opened this issue 3 days ago · 0 comments</p>
          </div>
        </div>
        <div>
          <button>
            <p>Edit</p>
          </button>
          <button>
            <p>New Issue</p>
          </button>
        </div>

        <div>
          <div>
            <p>Assignee</p>
            <img src={UserImg} alt="" />
          </div>
          <div>
            <p>Labels</p>
            <button>0921</button>
          </div>
        </div>

        <div>
          <div>
            <img src={UserImg} alt="" />
          </div>
          <div>
            <div>
              <div>
                <button>
                  <p>Write</p>
                </button>
                <button>
                  <p>Preview</p>
                </button>
              </div>
              <div>
                <div>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
                <div>
                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                </div>
                <div>
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                </div>
                <div>
                  <button>10</button>
                  <button>11</button>
                  <button>12</button>
                </div>
              </div>
            </div>
            <div>
              <textarea cols="30" rows="10" />
              <div>
                <button>
                  Attach files by dragging & dropping, selectimg or pasting
                  them.
                </button>
                <button>M+</button>
              </div>
            </div>
            <div>
              <div>
                <button>
                  <img src="" alt="closed " />
                  <p>Close issue</p>
                </button>
                <button>下拉按鈕</button>
              </div>
              <div>
                <ul>
                  <li>
                    <div>勾勾</div>
                    <div>
                      <div>
                        <img src="" alt="closed" />
                        <p>Close as completed</p>
                      </div>
                      <div>
                        <p>Done, closed, fixed, resolved</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>勾勾</div>
                    <div>
                      <div>
                        <img src="" alt="NotClosed" />
                        <p>Close as not planned</p>
                      </div>
                      <div>
                        <p>Won't fix, can't repo, duplicate, stale</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <button>comment</button>
            </div>
          </div>
          <div>
            <p>
              <img src="" alt="版權" />
              Remember, contributions to this repository should follow our
              GitHub Community Guidelines.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default IssueDetailPage;
