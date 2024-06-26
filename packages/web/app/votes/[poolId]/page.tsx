"use client";
import React, { useEffect, useState } from "react";
import VotesHome from "../../components/VotesHome";
import Aos from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
import useGetVotingPollsData from "@/hooks/useGetVotingPollsData";
import useUpload from "@/hooks/useUploadToIpfs";

const Pages = () => {
	const p = useParams();
	const { pollsKeys, pollsInFull } = useGetVotingPollsData();
	const [pollsData, setPollsData] = useState({});
	const [pollCid, setPollCid] = useState("");

	useEffect(() => {
		Aos.init({
			offset: 0,
			duration: 1200,
			easing: "ease",
			delay: 0
		});
		//	console.log(p);
		const data = pollsInFull[p?.poolId?.toString()];
		if (data) {
			setPollsData(data);

			
		}
	}, [pollsInFull, p]);

	return (
		<main className="flex justify-center  ">
			<section className="lg:max-w-[1400px] w-[95%] lg:mx-[0px] mx-auto lg:w-full">
				{pollsData ? (
					<VotesHome
						pollsData={pollsData}
		
						campaingId={p?.poolId}
					/>
				) : (
					<>Data not Found </>
				)}
			</section>
		</main>
	);
};

export default Pages;
