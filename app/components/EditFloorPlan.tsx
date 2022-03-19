import { Form } from "remix";
import {
  TextField,
  Stack,
  Button,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@mui/material";

export function EditFloorPlan({
  errors,
  owner,
  title = "",
  description = "",
  cost = "",
  githubOwner = "",
  githubRepo = "",
  setupTime = "",
  tags = "",
}) {
  return (
    <Stack spacing={2} sx={{ p: 4 }}>
      <Form method="post">
        <input type="hidden" name="owner" value={owner} />

        <Stack
          spacing={2}
          alignItems="stretch"
          sx={{
            width: "100%",
            maxWidth: "500px",
            margin: "60px auto",
          }}
        >
          <Box>
            <TextField
              error={errors?.githubOwner}
              id="githubOwner"
              label="Github Owner"
              helperText={
                errors?.githubOwner ? "Github Owner is required" : "Which Github Organization owns this project?" 
              }
              variant="filled"
              name="githubOwner"
              fullWidth
              defaultValue={githubOwner}
            />
          </Box>
          <Box>
            <TextField
              error={errors?.githubRepo}
              id="githubRepo"
              label="Github Repo"
              helperText={errors?.githubRepo ? "githubRepo is required" : "What is the name of the Github Repo?"}
              variant="filled"
              name="githubRepo"
              fullWidth
              defaultValue={githubRepo}
            />
          </Box>
          <Box>
            <TextField
              error={errors?.title}
              id="title"
              label="Title"
              helperText={errors?.title ? "Title is required" : "Display name for the project || Repo Name"}
              variant="filled"
              name="title"
              fullWidth
              defaultValue={title}
            />
          </Box>
          <Box>
            <TextField
              error={errors?.description}
              id="description"
              label="Description"
              helperText={
                errors?.description ? "Description is required" : "What makes this repo so great?"
              }
              variant="filled"
              name="description"
              fullWidth
              defaultValue={description}
              multiline
              rows={4}
            />
          </Box>
          <Box>
            <FormControl fullWidth variant="filled" error={errors?.cost}>
              <InputLabel id="select-label-cost">Cost</InputLabel>
              <Select
                labelId="select-label-cost"
                id="cost"
                label="Cost"
                name="cost"
                defaultValue={cost}
              >
                <MenuItem value={"free"}>Free</MenuItem>
                <MenuItem value={"$"}>$</MenuItem>
                <MenuItem value={"$$"}>$$</MenuItem>
                <MenuItem value={"$$$"}>$$$</MenuItem>
              </Select>
              <FormHelperText>
                {errors?.cost ? "Cost is required" : "How much does this plan cost to run when starting?"}
              </FormHelperText>
            </FormControl>
          </Box>

          <Box>
            <FormControl fullWidth variant="filled" error={errors?.setupTime}>
              <InputLabel id="select-label-setupTime">Setup Time</InputLabel>
              <Select
                labelId="select-label-setupTime"
                id="setupTime"
                label="Setup Time"
                name="setupTime"
                defaultValue={setupTime}
              >
                <MenuItem value={"5min"}>5min</MenuItem>
                <MenuItem value={"30min"}>30min</MenuItem>
                <MenuItem value={"1hr"}>1hr</MenuItem>
                <MenuItem value={"2hr"}>2hr</MenuItem>
                <MenuItem value={"5hr"}>5hr</MenuItem>
                <MenuItem value={"1day"}>1day</MenuItem>
                <MenuItem value={"1week"}>1week</MenuItem>
              </Select>
              <FormHelperText>
                {errors?.setupTime ? "Setup Time is required" : "How long does it take to setup?"}
              </FormHelperText>
            </FormControl>
          </Box>
          <Box>
            <TextField
              error={errors?.tags}
              id="tags"
              label="Tags"
              helperText={errors?.tags ? "tags is required" : "What are some search terms for this repo?"}
              variant="filled"
              name="tags"
              fullWidth
              defaultValue={tags}
            />
          </Box>
          <Box>
            <Button type="submit" variant="contained" fullWidth>
              Create Floor Plan
            </Button>
          </Box>
        </Stack>
      </Form>
    </Stack>
  );
}
