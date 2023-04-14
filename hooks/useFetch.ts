import { useState, useEffect, useCallback } from 'react'
import { DataState } from '../interface/api'
import { GITHUB_MOCK_URL } from '@/constants/constants'

export const useFetch = () => {
  const [dataState, setDataState] = useState<DataState>({
    data: [],
    loading: true,
    error: null,
  })

  const handleFetch = useCallback(async () => {
    try {
      const response = await fetch(GITHUB_MOCK_URL)

      if (!response.ok) throw new Error(response.statusText)

      const dataApi = await response.json()

      setDataState((prev) => ({
        ...prev,
        loading: false,
        data: dataApi,
      }))
    } catch (error) {
      setDataState((prev) => ({
        ...prev,
        loading: false,
        error: (error as Error).message,
      }))
    }
  }, [])

  useEffect(() => {
     handleFetch()
  }, [handleFetch])

  return {
    ...dataState,
  }
}
