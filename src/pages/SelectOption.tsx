import React, { useState } from "react";
import { VOLUME_SOURCE, IMAGE_SOURCE, SNAPSHOT_SOURCE } from "../data/data";
import SelectControl from "../components/SelectControl";

const SelectOption = () => {
  const [volume, setVolume] = useState(VOLUME_SOURCE[0].value);
  const [image, setImage] = useState(IMAGE_SOURCE[0].value);
  const [snapshot, setSnapshot] = useState(SNAPSHOT_SOURCE[0].value);

  console.log(volume);
  return (
    <div>
      <h1>Select Depends On Condition</h1>
      <SelectControl
        data={VOLUME_SOURCE}
        onChangeSelect={(e: string) => setVolume(e)}
        defaultValue={volume}
      />

      {volume === "image" && (
        <SelectControl
          data={IMAGE_SOURCE}
          onChangeSelect={(e: string) => setImage(e)}
          defaultValue={image}
        />
      )}

      {volume === "snapshot" && (
        <SelectControl
          data={SNAPSHOT_SOURCE}
          onChangeSelect={(e: string) => setSnapshot(e)}
          defaultValue={snapshot}
        />
      )}
    </div>
  );
};

export default SelectOption;
