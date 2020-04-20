import React, { FC, useCallback } from 'react';

export const Tasks: FC = () => {

  const handleGet = useCallback(async () => {
    const response = await fetch('/api');
    const tasks = await response.json();
  });

    return <div>
      <button type="button" onClick={handleGet}>GET</button>
    </div>
}