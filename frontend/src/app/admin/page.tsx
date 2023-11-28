"use client";
import { Grid, Input, Typography } from "@mui/material";
import { create } from "ipfs-http-client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../redux/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";

function Admin() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { polymarket, account } = useSelector((state: RootState) => state.data);
  const [loading, setLoading] = useState(false);

  const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageHash, setImageHash] = useState("");
  const [resolverUrl, setResolverUrl] = useState("");
  const [timestamp, setTimestamp] = useState<
    string | number | readonly string[] | undefined
  >(Date());

  const uploadImage = async (e: any) => {
    const file = e.target.files[0];
    const added = await client.add(file);
    setImageHash(added.path);
  };

  useEffect(() => {
    dispatch(loadWeb3());
  }, [dispatch]);

  const handleSubmit = async () => {
    setLoading(true);
    await polymarket.methods
      .createQuestion(title, imageHash, description, resolverUrl, timestamp)
      .send({
        from: account,
      });
    setLoading(false);
    setTitle("");
    setDescription("");
    setImageHash("");
    setResolverUrl("");
    setTimestamp(undefined);
    router.push("/");
  };
  return (
    <Grid container>
      <Grid item>
        {" "}
        <div className="">
          <Link href="/admin/markets">
            <div className="">See All Markets</div>
          </Link>
          <div className="lg ">
            <span className="text-lg font-semibold mt-4">Add New Market</span>
            <span className="text-lg font mt-6 mb-1">Market Title</span>
            <Input
              type="Input"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=""
              placeholder="Title"
              autoComplete="off"
            />
            <span className="text-lg font mt-6 mb-1">Market Description</span>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className=""
              placeholder="Description"
              autoComplete="off"
            ></textarea>
            <span className="text-lg font mt-6 mb-1">Market Title Image</span>
            <Input type="file" onChange={uploadImage} />
            <span className="text-lg font mt-6 mb-1">Resolve URL</span>
            <Input
              type="input"
              name="resolverUrl"
              value={resolverUrl}
              onChange={(e) => setResolverUrl(e.target.value)}
              className=""
              placeholder="URL"
              autoComplete="off"
            />
            <span className="text-lg font mt-6 mb-1">End Date</span>
            <input
              type="date"
              name="timestamp"
              // value={timestamp}
              onChange={(e) => {
                setTimestamp(e.target.valueAsDate?.getTime());
              }}
              className=""
              autoComplete="off"
            />
            {loading ? (
              <span className="">Loading...</span>
            ) : (
              <button
                className=""
                onClick={() => {
                  handleSubmit();
                }}
              >
                Create Market
              </button>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Admin;
