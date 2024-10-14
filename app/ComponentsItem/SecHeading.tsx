import SparklesText from '@/components/ui/sparkles-text'
import React from 'react'

interface SecHeadingProps {
    title: string; // Define the type for the title prop
  }
export default function SecHeading({title}:SecHeadingProps) {
  return (
    <div>
      <SparklesText text={title} />
    </div>
  )
}
