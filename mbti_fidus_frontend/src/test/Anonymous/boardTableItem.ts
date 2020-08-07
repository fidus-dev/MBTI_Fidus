import { IHeaderCell, IBodyCell, IBodyRow } from '../../components/Anonymous/BoardList/interfaces';

export const boardTableHeaderItem: IHeaderCell[] = [
    {
        id: 'title',
        label: 'Title',
        width: '60%',
        justifyContent: 'flex-start'
    },
    {
        id: 'dispose',
        label: 'Time Left',
        width: '40%',
        justifyContent: 'center'
    }
]

export const boardTableBodyRowItems: IBodyRow<IBodyCell>[] = [
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
    {
        item: [
            {
                id: 'title',
                value: '게시글1'
            },
            {
                id: 'dispose',
                value: '29시간(2020-06-22 23:23:40)'
            },
        ]
    },
];