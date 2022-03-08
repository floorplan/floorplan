import { Form, Link } from "remix";
import Editor from "@monaco-editor/react";
import {
  FormControlLabel,
  TextField,
  Switch,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { DateTimePicker } from "~/components/DateTimePicker";

export function EditPost({
  errors,
  authorId,
  isPublished,
  setIsPublished,
  date,
  setDate,
  markdown,
  handleEditorChange,
  title = "",
  description = "",
  slug = "",
  imageUrl = "",
  imageAlt = "",
  tags = "",
}) {
  return (
    <Stack spacing={2} sx={{ p: 4 }}>
      <Form method="post">
        <input type="hidden" name="authorId" value={authorId} />
        <input
          type="hidden"
          name="isPublished"
          value={isPublished.toString()}
        />
        <input type="hidden" name="markdown" value={markdown} />
        <input
          type="hidden"
          name="publishDate"
          value={date?.getTime().toString()}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ p: 4 }}
        >
          <Stack
            spacing={2}
            alignItems="stretch"
            sx={{
              width: "100%",
              minWidth: { md: "320px" },
              flex: { md: "0 0 320px" },
            }}
          >
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={isPublished}
                    onChange={(event) => setIsPublished(event.target.checked)}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
                label={isPublished ? "Is Published" : "Not Published"}
              />
            </Box>
            <Box>
              <DateTimePicker date={date} setDate={setDate} variant="filled" />
            </Box>
            <Box>
              <TextField
                error={errors?.title}
                id="title"
                label="Title"
                helperText={errors?.title ? "Title is required" : null}
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
                  errors?.description ? "Description is required" : null
                }
                variant="filled"
                name="description"
                fullWidth
                defaultValue={description}
              />
            </Box>
            <Box>
              <TextField
                error={errors?.slug}
                id="slug"
                label="Slug"
                helperText={errors?.slug ? "Slug is required" : null}
                variant="filled"
                name="slug"
                fullWidth
                defaultValue={slug}
              />
            </Box>
            <Box>
              <TextField
                error={errors?.imageUrl}
                id="imageUrl"
                label="Image Url"
                helperText={errors?.imageUrl ? "imageUrl is required" : null}
                variant="filled"
                name="imageUrl"
                fullWidth
                defaultValue={imageUrl}
              />
            </Box>
            <Box>
              <TextField
                error={errors?.imageAlt}
                id="imageAlt"
                label="Image Alt Text"
                helperText={errors?.imageAlt ? "imageAlt is required" : null}
                variant="filled"
                name="imageAlt"
                fullWidth
                defaultValue={imageAlt}
              />
            </Box>
            <Box>
              <TextField
                error={errors?.tags}
                id="tags"
                label="Tags"
                helperText={errors?.tags ? "tags is required" : null}
                variant="filled"
                name="tags"
                fullWidth
                defaultValue={tags}
              />
            </Box>
          </Stack>
          <Stack
            spacing={2}
            direction={{ xs: "column", md: "column-reverse" }}
            justifyContent="flex-end"
            sx={{ flex: "1 1" }}
          >
            <Box sx={{ flex: "1 1", minHeight: "500px" }}>
              <Editor
                height="80vh"
                defaultLanguage="markdown"
                onChange={handleEditorChange}
                theme="vs-dark"
                defaultValue={markdown}
              />

              {/* label="Markdown"
            // helperText={errors?.markdown ? <em>Markdown is required</em> : null} */}
            </Box>
            <Stack direction={"row"} spacing={2} justifyContent="flex-end">
              <Button
                component={Link}
                to={`/blog/${slug}`}
                target="_blank"
                color="secondary"
              >
                Preview
              </Button>
              <Button type="submit" variant="contained">
                Create Post
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Form>
    </Stack>
  );
}
