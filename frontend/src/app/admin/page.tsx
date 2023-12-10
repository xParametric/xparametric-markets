"use client";
import {
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
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
    <Container maxWidth={"xl"}>
      <Grid container>
        <Grid item xs={12}>
          <Link href="/admin/markets">
            <Button>See All Markets</Button>
          </Link>
          <Typography variant="h6" gutterBottom>
            Add New Market
          </Typography>
          <TextField
            label="Market Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            autoComplete="off"
            margin="normal"
          />
          <TextField
            label="Market Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Typography variant="h6" gutterBottom>
            Market Title Image
          </Typography>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={uploadImage} />
          </Button>
          <TextField
            label="Resolve URL"
            variant="outlined"
            value={resolverUrl}
            onChange={(e) => setResolverUrl(e.target.value)}
            fullWidth
            margin="normal"
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
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create Market
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Admin;
