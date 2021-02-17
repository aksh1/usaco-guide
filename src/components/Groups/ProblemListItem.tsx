import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { Problem } from '../../mobx/Problem';
import { Link, navigate } from 'gatsby';

const ProblemListItem = observer(({ problem }: { problem: Problem }) => (
  <li className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6">
    <div className="flex items-center justify-between space-x-4">
      <div className="min-w-0 space-y-3">
        <div className="flex items-center space-x-3">
          <span
            className="h-5 w-5 bg-green-100 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 bg-green-400 rounded-full" />
          </span>

          <span className="block">
            <h2 className="font-medium leading-3">
              <Link
                to={`/groups/${problem.post.group.groupId}/post/${problem.post.id}/problems/${problem.id}`}
              >
                <span className="absolute inset-0" aria-hidden="true" />
                {problem.name}
              </Link>
            </h2>
          </span>
        </div>
        <div className="relative group flex items-center space-x-2.5">
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate">
            {problem.points} points
          </span>
        </div>
      </div>
      <div className="sm:hidden">
        {/* Heroicon name: solid/chevron-right */}
        <svg
          className="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {/* Repo meta info */}
      <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
        <p className="flex items-center space-x-4">
          {problem.post.isEditing ? (
            <span className="relative text-sm text-gray-500 hover:text-gray-900 font-medium">
              Edit Problem
            </span>
          ) : (
            <Link
              to={`/groups/${problem.post.group.groupId}/post/${problem.post.id}/problems/${problem.id}`}
              className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
            >
              View Problem
            </Link>
          )}
        </p>
        <p className="flex text-gray-500 text-sm space-x-2">
          <span>Source: {problem.source}</span>
          <span aria-hidden="true">&middot;</span>
          <span>Difficulty: {problem.difficulty}</span>
        </p>
      </div>
    </div>
  </li>
));

export default ProblemListItem;