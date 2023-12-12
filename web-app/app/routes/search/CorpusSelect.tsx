import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useControlledState } from "./useControlledState";

interface CorpusSelectProps {
  corpus?: string;
  corpusOptions?: { value: string; label: string }[];
}
export const CorpusSelect: React.FC<CorpusSelectProps> = ({
  corpus,
  corpusOptions,
}) => {
  const { t } = useTranslation("search");
  const [corpusState, setCorpusState] = useControlledState(
    corpus?.split(",") || []
  );
  return (
    <>
      <FormControl>
        <InputLabel id="corpus-label">{t("corpus")}</InputLabel>
        <Select
          labelId="corpus-label"
          label={t("corpus")}
          name="corpus"
          value={corpusState}
          onChange={(e) => {
            setCorpusState(e.target.value as string[]);
          }}
          multiple
        >
          {corpusOptions?.map((corpus) => (
            <MenuItem key={corpus.value} value={corpus.value}>
              {corpus.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
