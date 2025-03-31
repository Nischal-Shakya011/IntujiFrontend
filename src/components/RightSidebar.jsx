import React from "react";

export default function RightSidebar() {
  const savingData = [
    {
      id: 0,
      name: "Bali Vacation",
      subname: "Target: August 25 2022",
      upperAmount: "$1950,21",
      lowerAmount: "$4000",
      percentage: 48,
      color: "#4745A4",
    },
    {
      id: 1,
      name: "New Gadget",
      subname: "Target: August 25 2022",
      upperAmount: "$790,21",
      lowerAmount: "$1000",
      percentage: 79,
      color: "#F9BA33",
    },
    {
      id: 2,
      name: "Charity",
      subname: "Target: August 25 2022",
      upperAmount: "$32,111",
      lowerAmount: "$100",
      percentage: 32,
      color: "#3BBB6E",
    },
  ];

  const transactionData = [
    {
      id: 0,
      name: "Figma",
      subname: "August 20, 2022",
      amount: "$100",
    },
    {
      id: 1,
      name: "Youtube",
      subname: "August 20, 2022",
      amount: "$120",
    },
    {
      id: 2,
      name: "Spotify",
      subname: "August 20, 2022",
      amount: "$15",
    },
    {
      id: 3,
      name: "Freepik",
      subname: "August 20, 2022",
      amount: "$300",
    },
  ];

  return (
    <>
      <aside class="right-sidebar">
        <div class="top-icons">
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.44V9.77"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M15.3299 18.82C15.3299 20.65 13.8299 22.15 11.9999 22.15C11.0899 22.15 10.2499 21.77 9.64992 21.17C9.04992 20.57 8.66992 19.73 8.66992 18.82"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
          </button>

          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 8H17"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 13H13"
                stroke="#0D163A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="profile">
            <div class="profilePic">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5798 19.01L2.5598 19.03C2.2898 18.44 2.1198 17.77 2.0498 17.03C2.1198 17.76 2.3098 18.42 2.5798 19.01Z"
                  fill="#292D32"
                />
                <path
                  d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
                  fill="#292D32"
                />
                <path
                  d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
                  fill="#292D32"
                />
              </svg>
            </div>
            <p>Mirie Kiritani</p>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9201 8.95001L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95001"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* <!-- Saving Plan --> */}
        <div class="saving">
          <div>
            <h3 class="text-xl font-semibold">Saving Plan</h3>
            <a href="#" class="text-[#4745A4] text-lg font-normal">
              See All
            </a>
          </div>

          <div className="flex flex-col gap-5">
            {/* <!-- Bali Vacation --> */}
            {savingData?.map((item, index) => (
              <div key={item?.id} className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h4 className="text-md">{item?.name}</h4>
                  <p className="text-xs text-gray-500">{item?.subname}</p>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <p className="text-xl font-bold">
                    {item?.upperAmount}{" "}
                    <span className="text-gray-500 text-sm">
                      / {item?.lowerAmount}
                    </span>
                  </p>
                  <span className={`font-bold`} style={{ color: item?.color }}>
                    {item?.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 h-2 rounded-lg mt-1">
                  <div
                    className="h-2 rounded-lg"
                    style={{
                      backgroundColor: item?.color,
                      width: `${item?.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div class="transaction">
          <div>
            <h3 class="text-xl font-semibold">Recent Transaction</h3>
            <a href="#" class="text-[#4745A4] text-lg font-normal">
              See All
            </a>
          </div>

          <div className="flex flex-col gap-8">
            {/* <!-- Recent Transaction --> */}
            {transactionData?.map((item, index) => (
              <div key={item?.id} className="flex justify-between">
                <div className="flex gap-4 align-center w-[75%]">
                  <div class="transactionPic">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5798 19.01L2.5598 19.03C2.2898 18.44 2.1198 17.77 2.0498 17.03C2.1198 17.76 2.3098 18.42 2.5798 19.01Z"
                        fill="#292D32"
                      />
                      <path
                        d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z"
                        fill="#292D32"
                      />
                      <path
                        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z"
                        fill="#292D32"
                      />
                    </svg>
                  </div>
                  <div>
                    <p class="text-md font-semibold">{item?.name}</p>
                    <p class="text-xs text-gray-500">{item?.subname}</p>
                  </div>
                </div>

                <div className="w-[25%]">
                  <p class="text-lg font-bold">{item?.amount}</p>
                  <p className="text-sm text-[#3BBB6E]">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
