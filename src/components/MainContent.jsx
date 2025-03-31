import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function MainContent() {
  const values = [
    {
      id: 0,
      title: "Your Balance",
      subtitle: "15% compared with last month",
      amount: "$28,891.138",
      firstIcon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="47"
            height="47"
            rx="23.5"
            stroke="#DEDEDE"
            stroke-opacity="0.2"
          />
          <path
            opacity="0.2"
            d="M32.0535 26.0667C31.4935 26.6134 31.1735 27.4 31.2535 28.24C31.3735 29.68 32.6935 30.7334 34.1335 30.7334H36.6668V32.32C36.6668 35.08 34.4135 37.3334 31.6535 37.3334H16.3468C13.5868 37.3334 11.3335 35.08 11.3335 32.32V23.3467C11.3335 20.5867 13.5868 18.3334 16.3468 18.3334H31.6535C34.4135 18.3334 36.6668 20.5867 36.6668 23.3467V25.2667H33.9735C33.2268 25.2667 32.5468 25.56 32.0535 26.0667Z"
            fill="white"
          />
          <path
            opacity="0.8"
            d="M27.8002 13.2667V18.3334H16.3468C13.5868 18.3334 11.3335 20.5867 11.3335 23.3467V18.4534C11.3335 16.8667 12.3068 15.4533 13.7868 14.8933L24.3735 10.8933C26.0268 10.28 27.8002 11.4934 27.8002 13.2667Z"
            fill="white"
          />
          <path
            opacity="0.8"
            d="M38.08 26.6267V29.3734C38.08 30.1067 37.4934 30.7067 36.7467 30.7334H34.1334C32.6934 30.7334 31.3734 29.68 31.2534 28.24C31.1734 27.4 31.4934 26.6134 32.0534 26.0667C32.5467 25.56 33.2267 25.2667 33.9734 25.2667H36.7467C37.4934 25.2934 38.08 25.8933 38.08 26.6267Z"
            fill="white"
          />
          <path
            d="M26.6668 25H17.3335C16.7868 25 16.3335 24.5467 16.3335 24C16.3335 23.4533 16.7868 23 17.3335 23H26.6668C27.2135 23 27.6668 23.4533 27.6668 24C27.6668 24.5467 27.2135 25 26.6668 25Z"
            fill="white"
          />
        </svg>
      ),
      secondIcon: (
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M9.444 1.66663H4.55567C2.43234 1.66663 1.1665 2.93246 1.1665 5.05579V9.93829C1.1665 12.0675 2.43234 13.3333 4.55567 13.3333H9.43817C11.5615 13.3333 12.8273 12.0675 12.8273 9.94413V5.05579C12.8332 2.93246 11.5673 1.66663 9.444 1.66663Z"
            fill="#31D3A3"
          />
          <path
            d="M9.76954 4.58337H6.95204C6.71287 4.58337 6.51454 4.78171 6.51454 5.02087C6.51454 5.26004 6.71287 5.45837 6.95204 5.45837H8.7137L4.21037 9.96171C4.0412 10.1309 4.0412 10.4109 4.21037 10.58C4.29787 10.6675 4.4087 10.7084 4.51954 10.7084C4.63037 10.7084 4.7412 10.6675 4.8287 10.58L9.33204 6.07671V7.83837C9.33204 8.07754 9.53037 8.27587 9.76954 8.27587C10.0087 8.27587 10.207 8.07754 10.207 7.83837V5.02087C10.207 4.78171 10.0087 4.58337 9.76954 4.58337Z"
            fill="#31D3A3"
          />
        </svg>
      ),
      arrowIcon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9302 5.93005L21.0002 12.0001L14.9302 18.0701"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5098 12H20.8298"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H7.47"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 1,
      title: "Saving",
      subtitle: "10% compared with last month",
      amount: "$1,050.44",
      firstIcon: (
        <svg
          width="49"
          height="48"
          viewBox="0 0 49 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="0.5"
            width="47"
            height="47"
            rx="23.5"
            stroke="#EEEEEE"
          />
          <path
            opacity="0.4"
            d="M25.6865 15.84H15.3132C13.0332 15.84 11.1665 17.7066 11.1665 19.9866V35.1333C11.1665 37.0666 12.5532 37.8933 14.2465 36.9466L19.4865 34.0266C20.0465 33.7199 20.9532 33.7199 21.4998 34.0266L26.7398 36.9466C28.4332 37.8933 29.8198 37.0666 29.8198 35.1333V19.9866C29.8332 17.7066 27.9665 15.84 25.6865 15.84Z"
            fill="#3BBB6E"
          />
          <path
            d="M37.8332 14.8133V29.96C37.8332 31.8933 36.4465 32.7066 34.7532 31.7733L29.8332 29.0266V19.9866C29.8332 17.7066 27.9665 15.84 25.6865 15.84H19.1665V14.8133C19.1665 12.5333 21.0332 10.6666 23.3132 10.6666H33.6865C35.9665 10.6666 37.8332 12.5333 37.8332 14.8133Z"
            fill="#3BBB6E"
          />
        </svg>
      ),
      secondIcon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M9.944 1.66663H5.05567C2.93234 1.66663 1.6665 2.93246 1.6665 5.05579V9.93829C1.6665 12.0675 2.93234 13.3333 5.05567 13.3333H9.93817C12.0615 13.3333 13.3273 12.0675 13.3273 9.94413V5.05579C13.3332 2.93246 12.0673 1.66663 9.944 1.66663Z"
            fill="#FE3766"
          />
          <path
            d="M10.2695 4.58337H7.45204C7.21287 4.58337 7.01454 4.78171 7.01454 5.02087C7.01454 5.26004 7.21287 5.45837 7.45204 5.45837H9.2137L4.71037 9.96171C4.5412 10.1309 4.5412 10.4109 4.71037 10.58C4.79787 10.6675 4.9087 10.7084 5.01954 10.7084C5.13037 10.7084 5.2412 10.6675 5.3287 10.58L9.83204 6.07671V7.83837C9.83204 8.07754 10.0304 8.27587 10.2695 8.27587C10.5087 8.27587 10.707 8.07754 10.707 7.83837V5.02087C10.707 4.78171 10.5087 4.58337 10.2695 4.58337Z"
            fill="#FE3766"
          />
        </svg>
      ),
      arrowIcon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9302 5.93005L21.0002 12.0001L14.9302 18.0701"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5098 12H20.8298"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H7.47"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Expenses",
      subtitle: "2% compared with last montg",
      amount: "$200.31",
      firstIcon: (
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1"
            width="47"
            height="47"
            rx="23.5"
            stroke="#EEEEEE"
          />
          <path
            d="M30.6934 36.8866L26.0534 34.5666C24.76 33.9266 23.2534 33.9266 21.96 34.5666L17.32 36.8866C13.3334 38.8733 9.13338 34.5933 11.2134 30.6599L12.3067 28.6066C12.4534 28.3266 12.6934 28.0999 12.9867 27.9666L29.84 20.3666C30.5334 20.0599 31.3467 20.3399 31.6934 21.0066L36.7734 30.6599C38.8534 34.5933 34.6667 38.8733 30.6934 36.8866Z"
            fill="#F9BA33"
          />
          <path
            opacity="0.4"
            d="M28.8001 18.7533L17.7601 23.7267C16.5201 24.2867 15.2668 22.9533 15.9068 21.7533L19.9601 14.06C21.6801 10.7933 26.3468 10.7933 28.0668 14.06L29.4934 16.78C29.8668 17.5133 29.5468 18.42 28.8001 18.7533Z"
            fill="#F9BA33"
          />
        </svg>
      ),
      secondIcon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M9.444 1.16663H4.55567C2.43234 1.16663 1.1665 2.43246 1.1665 4.55579V9.43829C1.1665 11.5675 2.43234 12.8333 4.55567 12.8333H9.43817C11.5615 12.8333 12.8273 11.5675 12.8273 9.44413V4.55579C12.8332 2.43246 11.5673 1.16663 9.444 1.16663Z"
            fill="#F9BA33"
          />
          <path
            d="M9.76954 4.08337H6.95204C6.71287 4.08337 6.51454 4.28171 6.51454 4.52087C6.51454 4.76004 6.71287 4.95837 6.95204 4.95837H8.7137L4.21037 9.46171C4.0412 9.63087 4.0412 9.91087 4.21037 10.08C4.29787 10.1675 4.4087 10.2084 4.51954 10.2084C4.63037 10.2084 4.7412 10.1675 4.8287 10.08L9.33204 5.57671V7.33837C9.33204 7.57754 9.53037 7.77587 9.76954 7.77587C10.0087 7.77587 10.207 7.57754 10.207 7.33837V4.52087C10.207 4.28171 10.0087 4.08337 9.76954 4.08337Z"
            fill="#F9BA33"
          />
        </svg>
      ),
      arrowIcon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9302 5.93005L21.0002 12.0001L14.9302 18.0701"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5098 12H20.8298"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H7.47"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Incomes",
      subtitle: "8% compared with last month",
      amount: "$28,891.138",
      firstIcon: (
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="47" height="47" rx="23.5" stroke="#EEEEEE" />
          <path
            d="M31.1935 12.1266L26.5535 14.4466C25.2601 15.0866 23.7535 15.0866 22.4601 14.4466L17.8068 12.1133C13.8335 10.1266 9.63346 14.42 11.7135 18.3533L12.8068 20.4066C12.9535 20.6866 13.1935 20.9133 13.4868 21.0466L30.3535 28.6333C31.0468 28.94 31.8601 28.66 32.2068 27.9933L37.2868 18.34C39.3535 14.42 35.1668 10.1266 31.1935 12.1266Z"
            fill="#1775E4"
          />
          <path
            opacity="0.4"
            d="M29.3001 30.2466L18.2601 25.2733C17.0201 24.7133 15.7668 26.0466 16.4068 27.2466L20.4601 34.94C22.1801 38.2066 26.8468 38.2066 28.5668 34.94L29.9934 32.22C30.3668 31.4866 30.0468 30.5933 29.3001 30.2466Z"
            fill="#1775E4"
          />
        </svg>
      ),
      secondIcon: (
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M9.944 1.16663H5.05567C2.93234 1.16663 1.6665 2.43246 1.6665 4.55579V9.43829C1.6665 11.5675 2.93234 12.8333 5.05567 12.8333H9.93817C12.0615 12.8333 13.3273 11.5675 13.3273 9.44413V4.55579C13.3332 2.43246 12.0673 1.16663 9.944 1.16663Z"
            fill="#1775E4"
          />
          <path
            d="M10.2695 4.08337H7.45204C7.21287 4.08337 7.01454 4.28171 7.01454 4.52087C7.01454 4.76004 7.21287 4.95837 7.45204 4.95837H9.2137L4.71037 9.46171C4.5412 9.63087 4.5412 9.91087 4.71037 10.08C4.79787 10.1675 4.9087 10.2084 5.01954 10.2084C5.13037 10.2084 5.2412 10.1675 5.3287 10.08L9.83204 5.57671V7.33837C9.83204 7.57754 10.0304 7.77587 10.2695 7.77587C10.5087 7.77587 10.707 7.57754 10.707 7.33837V4.52087C10.707 4.28171 10.5087 4.08337 10.2695 4.08337Z"
            fill="#1775E4"
          />
        </svg>
      ),
      arrowIcon: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.9302 5.93005L21.0002 12.0001L14.9302 18.0701"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.5098 12H20.8298"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 12H7.47"
            stroke="black"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  const data = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Label 1",
        data: [12000, 14000, 8000, 15000, 10000, 20000, 18000],
        borderColor: "#4745A4",
        backgroundColor: "#4745A4",
        fill: true,
        tension: 0.4,
      },
      {
        label: "Label 2",
        data: [6000, 8000, 5000, 10000, 7000, 12000, 9000],
        borderColor: "#F9BA33",
        backgroundColor: "#F9BA33",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value >= 1000 ? value / 1000 + "K" : value;
          },
        },
      },
    },
  };

  return (
    <>
      <main class="main-content">
        <header>
          <input type="text" placeholder="Search here..." class="search-box" />
        </header>

        {/* <OverView /> */}
        <section className="over-container">
          <h3 className="text-xl font-bold">Overview</h3>
          <div className="overview">
            {values?.map((item, index) => (
              <div
                className={`card balance ${index == 0 ? "activeCard" : ""}`}
                key={item?.id}
              >
                <div className="card-top">
                  <div>{item?.firstIcon}</div>
                  <div>
                    <div
                      className={`text-${
                        index == 0 ? "white" : "black"
                      } text-normal font-bold`}
                    >
                      {item?.title}
                    </div>
                    <div className="flex gap-1 items-center">
                      <span>{item?.secondIcon}</span>
                      <span
                        className={`text-sm text-${
                          index == 0 ? "[#d9d9d9]" : "[#0D163A]"
                        }`}
                      >
                        {" "}
                        {item?.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-bottom">
                  <div
                    className={`text-${
                      index == 0 ? "white" : "black"
                    } font-bold text-xl`}
                  >
                    {item?.amount}
                  </div>
                  <div>{item?.arrowIcon}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <!-- Analytics Section --> */}
        <section className="analytics">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">Analytics</h3>
            <div className="flex gap-4">
              <div className="flex gap-2 items-center">
                <div className="h-[12px] w-[12px] bg-[#4745A4] rounded-full"></div>
                <p>Label1</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="h-[12px] w-[12px] bg-[#F9BA33] rounded-full"></div>
                <p>Label2</p>
              </div>

              <div class="dropdown-container">
                <select class="dropdown">
                  <option value="weekly" selected>
                    Weekly
                  </option>
                  <option value="daily">Daily</option>
                  <option value="monthly">Monthly</option>
                  <div>
                    <svg
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.54134 0.0825195L4.50047 3.12339L1.45959 0.0825195L0.458008 1.0841L4.50047 5.12656L8.54292 1.0841L7.54134 0.0825195Z"
                        fill="#0D163A"
                      />
                    </svg>
                  </div>
                </select>
              </div>
            </div>
          </div>
          <div>
            <Line data={data} options={options} />
          </div>
        </section>
      </main>
    </>
  );
}
